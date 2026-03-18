using Microsoft.AspNetCore.StaticFiles;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Enable static files
var provider = new FileExtensionContentTypeProvider();
provider.Mappings[".html"] = "text/html";
provider.Mappings[".css"] = "text/css";
provider.Mappings[".js"] = "application/javascript";
provider.Mappings[".json"] = "application/json";

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new Microsoft.Extensions.FileProviders.PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "..")),
    RequestPath = "",
    ContentTypeProvider = provider
});

// API Endpoints

// Get all destinations
app.MapGet("/api/destinations", () => Results.Json(DestinationsData.GetAll()));

// Get destination by id
app.MapGet("/api/destinations/{id}", (int id) => {
    var dest = DestinationsData.GetById(id);
    return dest is not null ? Results.Json(dest) : Results.NotFound();
});

// Get accommodations
app.MapGet("/api/accommodations", () => Results.Json(AccommodationsData.GetAll()));

app.MapGet("/api/accommodations/search", (string? query, string? type) => {
    var results = AccommodationsData.Search(query, type);
    return Results.Json(results);
});

// Calculate trip cost
app.MapPost("/api/calculate-trip", (TripRequest request) => {
    var accommodationTotal = request.Days * request.HotelCostPerDay;
    var foodTotal = request.Days * request.FoodCostPerDay;
    var total = accommodationTotal + foodTotal + request.TravelCost;
    
    return Results.Json(new {
        accommodationTotal,
        foodTotal,
        travelCost = request.TravelCost,
        total
    });
});

// Health check
app.MapGet("/api/health", () => Results.Ok(new { status = "OK", message = "DeshDarshan API is running" }));

Console.WriteLine("===========================================");
Console.WriteLine("  DeshDarshan API Server");
Console.WriteLine("===========================================");
Console.WriteLine("  Server running at: http://localhost:5000");
Console.WriteLine("  API available at:   http://localhost:5000/api");
Console.WriteLine("===========================================");

app.Run();

// Data Models
public record TripRequest(int Days, int HotelCostPerDay, int FoodCostPerDay, int TravelCost);

// Destinations Data
public static class DestinationsData
{
    public static List<object> GetAll() => new List<object>
    {
        new { id = 1, name = "Rajasthan", subtitle = "Land of Kings", 
            famous = new[] { "Jaipur, Udaipur, Jodhpur", "Hawa Mahal, City Palace", "Thar Desert Safari" },
            hidden = new[] { "Bhangarh Fort", "Nakki Lake, Mount Abu" },
            food = new[] { "Daal Baati Churma", "Laal Maas, Gatte ki Sabzi" },
            image = "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80" },
        
        new { id = 2, name = "Kerala", subtitle = "God's Own Country",
            famous = new[] { "Alleppey Backwaters", "Munnar Tea Gardens", "Kovalam Beach" },
            hidden = new[] { "Wayanad Hills", "Pathiramanal Island" },
            food = new[] { "Sadhya (Feast)", "Appam with Stew" },
            image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
            
        new { id = 3, name = "Goa", subtitle = "Beach Paradise",
            famous = new[] { "Baga Beach, Calangute", "Basilica of Bom Jesus", "Fort Aguada" },
            hidden = new[] { "Palolem Beach", "Spice Plantations" },
            food = new[] { "Goan Fish Curry", "Pork Vindaloo, Bebinca" },
            image = "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80" },
            
        new { id = 4, name = "Uttarakhand", subtitle = "Dev Bhoomi",
            famous = new[] { "Haridwar, Rishikesh", "Nainital, Mussoorie", "Char Dham Yatra" },
            hidden = new[] { "Valley of Flowers", "Kashmir Great Lakes" },
            food = new[] { "Aloo Ke Gutke", "Bal Mithai" },
            image = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" },
            
        new { id = 5, name = "Tamil Nadu", subtitle = "Temple Land",
            famous = new[] { "Meenakshi Temple", "Shore Temple, Mahabalipuram", "Ooty, Kodaikanal" },
            hidden = new[] { "Hogenakkal Falls", "Yercaud Hills" },
            food = new[] { "Chettinad Cuisine", "Idli, Dosa, Samba" },
            image = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80" },
            
        new { id = 6, name = "Maharashtra", subtitle = "Financial Capital",
            famous = new[] { "Gateway of India", "Ajanta-Ellora Caves", "Pune, Shirdi" },
            hidden = new[] { "Malshej Ghat", "Kaas Plateau" },
            food = new[] { "Vada Pav, Pav Bhaji", "Misal Pav" },
            image = "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80" },
            
        new { id = 7, name = "Gujarat", subtitle = "Vibrant Heritage",
            famous = new[] { "Statue of Unity", "Sabarmati Ashram", "Rann of Kutch" },
            hidden = new[] { "Little Rann of Kutch", "Gir National Park" },
            food = new[] { "Dhokla, Thepla", "Undhiyu, Khandvi" },
            image = "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80" },
            
        new { id = 8, name = "West Bengal", subtitle = "Cultural Hub",
            famous = new[] { "Kolkata, Darjeeling", "Sundarbans", "Kalimpong" },
            hidden = new[] { "Bishnupur", "Murshidabad" },
            food = new[] { "Rosogolla, Misti Doi", "Kosha Mangsho" },
            image = "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80" },
            
        new { id = 9, name = "Punjab", subtitle = "Granary of India",
            famous = new[] { "Golden Temple, Amritsar", "Jallianwala Bagh", "Chandigarh" },
            hidden = new[] { "Anandpur Sahib", "Patiala" },
            food = new[] { "Sarson Da Saag", "Makki Di Roti, Lassi" },
            image = "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80" },
            
        new { id = 10, name = "Karnataka", subtitle = "Silicon Valley of India",
            famous = new[] { "Mysore Palace", "Hampi, Coorg", "Bangalore" },
            hidden = new[] { "Badami Cave Temples", "Bandipur National Park" },
            food = new[] { "Bisi Bele Bath", "Mysore Pak, Dosa" },
            image = "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=800&q=80" },
            
        new { id = 11, name = "Madhya Pradesh", subtitle = "Heart of India",
            famous = new[] { "Khajuraho Temples", "Kanha National Park", "Bhimbetka Caves" },
            hidden = new[] { "Pachmarhi", "Bhedaghat" },
            food = new[] { "Bhutte Ka Kees", "Poha, Jalebi" },
            image = "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" },
            
        new { id = 12, name = "Assam", subtitle = "Tea Garden Paradise",
            famous = new[] { "Kaziranga National Park", "Tea Gardens, Jorhat", "Guwahati" },
            hidden = new[] { "Majuli Island", "Dibru Saikhowa" },
            food = new[] { "Assamese Thali", "Masor Tenga" },
            image = "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80" },
            
        new { id = 13, name = "Odisha", subtitle = "Temple City",
            famous = new[] { "Jagannath Temple, Puri", "Sun Temple, Konark", "Bhubaneswar" },
            hidden = new[] { "Chilika Lake", "Elephanta Caves" },
            food = new[] { "Odia Thali", "Rasgulla, Pakhala" },
            image = "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80" },
            
        new { id = 14, name = "Jammu & Kashmir", subtitle = "Paradise on Earth",
            famous = new[] { "Srinagar, Gulmarg", "Pahalgam, Leh", "Dal Lake" },
            hidden = new[] { "Sonmarg", "Zanskar Valley" },
            food = new[] { "Rogan Josh", "Yakhni, Gushtaba" },
            image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
            
        new { id = 15, name = "Bihar", subtitle = "Ancient Heritage",
            famous = new[] { "Nalanda University", "Mahabodhi Temple", "Patna" },
            hidden = new[] { "Vishwa Shanti Stupa", "Jal Mandir, Pawapuri" },
            food = new[] { "Litti Chokha", "Sattu Paratha" },
            image = "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80" }
    };

    public static object? GetById(int id) => GetAll().FirstOrDefault(d => ((dynamic)d).id == id);
}

// Accommodations Data
public static class AccommodationsData
{
    private static List<object> _accommodations = new List<object>
    {
        new { id = 1, name = "Taj Palace Hotel", location = "New Delhi", type = "hotel", price = "Rs", priceValue = 8500, rating = 4.8, 
            amenities = new[] { "wifi", "restaurant", "pool", "parking" },
            image = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
            
        new { id = 2, name = "Leela Palace", location = "Bangalore", type = "resort", price = "Rs", priceValue = 12000, rating = 4.9,
            amenities = new[] { "spa", "restaurant", "pool", "gym" },
            image = "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80" },
            
        new { id = 3, name = "Cozy Homestay", location = "Jaipur", type = "homestay", price = "Rs", priceValue = 1500, rating = 4.5,
            amenities = new[] { "wifi", "breakfast", "parking" },
            image = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
            
        new { id = 4, name = "ITC Grand Bharat", location = "Gurgaon", type = "resort", price = "Rs", priceValue = 15000, rating = 4.9,
            amenities = new[] { "golf", "pool", "spa", "restaurant" },
            image = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80" },
            
        new { id = 5, name = "Budget Inn", location = "Mumbai", type = "hotel", price = "Rs", priceValue = 2500, rating = 4.0,
            amenities = new[] { "wifi", "restaurant", "parking" },
            image = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" },
            
        new { id = 6, name = "Kumarakom Lake Resort", location = "Kumarakom", type = "resort", price = "Rs", priceValue = 6500, rating = 4.7,
            amenities = new[] { "pool", "restaurant", "spa", "boat" },
            image = "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80" },
            
        new { id = 7, name = "Backwater Homestay", location = "Alleppey", type = "homestay", price = "Rs", priceValue = 1800, rating = 4.6,
            amenities = new[] { "wifi", "breakfast", "boat" },
            image = "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" },
            
        new { id = 8, name = "Grand Hotel", location = "Chennai", type = "hotel", price = "Rs", priceValue = 4500, rating = 4.3,
            amenities = new[] { "wifi", "restaurant", "pool", "gym" },
            image = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80" },
            
        new { id = 9, name = "Taj Corbett Resort", location = "Jim Corbett", type = "resort", price = "Rs", priceValue = 9500, rating = 4.8,
            amenities = new[] { "safari", "restaurant", "nature", "pool" },
            image = "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80" },
            
        new { id = 10, name = "Goa Beach Resort", location = "Goa", type = "resort", price = "Rs", priceValue = 5500, rating = 4.6,
            amenities = new[] { "pool", "beach", "restaurant", "bar" },
            image = "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=600&q=80" },
            
        new { id = 11, name = "City Budget Hotel", location = "Jaipur", type = "hotel", price = "Rs", priceValue = 2200, rating = 4.1,
            amenities = new[] { "wifi", "breakfast", "parking" },
            image = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80" },
            
        new { id = 12, name = "Heritage Homestay", location = "Udaipur", type = "homestay", price = "Rs", priceValue = 3500, rating = 4.7,
            amenities = new[] { "wifi", "breakfast", "heritage", "parking" },
            image = "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80" }
    };

    public static List<object> GetAll() => _accommodations;

    public static List<object> Search(string? query, string? type)
    {
        var results = _accommodations.AsEnumerable();

        if (!string.IsNullOrEmpty(query))
        {
            results = results.Where(a => 
                ((dynamic)a).name.ToLower().Contains(query.ToLower()) ||
                ((dynamic)a).location.ToLower().Contains(query.ToLower()));
        }

        if (!string.IsNullOrEmpty(type) && type != "all")
        {
            results = results.Where(a => ((dynamic)a).type == type);
        }

        return results.ToList();
    }
}
