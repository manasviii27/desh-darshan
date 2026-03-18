import com.sun.net.httpserver.*;
import java.io.*;
import java.net.InetSocketAddress;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.Executors;

public class Server {
    private static final int PORT = 5000;
    private static final String BASE_DIR = "..";
    
    // In-memory data
    private static final List<Map<String, Object>> destinations = new ArrayList<>();
    private static final List<Map<String, Object>> accommodations = new ArrayList<>();
    
    static {
        // Initialize destinations
        String[][] destData = {
            {"1", "Rajasthan", "Land of Kings", "Jaipur, Udaipur, Jodhpur|Hawa Mahal, City Palace|Thar Desert Safari", "Bhangarh Fort|Nakki Lake, Mount Abu", "Daal Baati Churma|Laal Maas"},
            {"2", "Kerala", "God's Own Country", "Alleppey Backwaters|Munnar Tea Gardens|Kovalam Beach", "Wayanad Hills|Pathiramanal Island", "Sadhya|Appam with Stew"},
            {"3", "Goa", "Beach Paradise", "Baga Beach|Calangute|Basilica of Bom Jesus", "Palolem Beach|Spice Plantations", "Goan Fish Curry|Pork Vindaloo"},
            {"4", "Uttarakhand", "Dev Bhoomi", "Haridwar, Rishikesh|Nainital, Mussoorie|Char Dham", "Valley of Flowers|Kashmir Great Lakes", "Aloo Ke Gutke|Bal Mithai"},
            {"5", "Tamil Nadu", "Temple Land", "Meenakshi Temple|Ooty, Kodaikanal|Shore Temple", "Hogenakkal Falls|Yercaud Hills", "Chettinad Cuisine|Idli, Dosa"},
            {"6", "Maharashtra", "Financial Capital", "Gateway of India|Ajanta-Ellora Caves|Pune", "Malshej Ghat|Kaas Plateau", "Vada Pav|Pav Bhaji"},
            {"7", "Gujarat", "Vibrant Heritage", "Statue of Unity|Sabarmati Ashram|Rann of Kutch", "Little Rann of Kutch|Gir National Park", "Dhokla|Thepla"},
            {"8", "West Bengal", "Cultural Hub", "Kolkata, Darjeeling|Sundarbans|Kalimpong", "Bishnupur|Murshidabad", "Rosogolla|Kosha Mangsho"},
            {"9", "Punjab", "Granary of India", "Golden Temple|Jallianwala Bagh|Chandigarh", "Anandpur Sahib|Patiala", "Sarson Da Saag|Makki Di Roti"},
            {"10", "Karnataka", "Silicon Valley", "Mysore Palace|Hampi, Coorg|Bangalore", "Badami Caves|Bandipur National Park", "Bisi Bele Bath|Mysore Pak"},
            {"11", "Madhya Pradesh", "Heart of India", "Khajuraho|Kanha National Park|Bhimbetka", "Pachmarhi|Bhedaghat", "Bhutte Ka Kees|Poha"},
            {"12", "Assam", "Tea Garden", "Kaziranga|Tea Gardens|Jorhat", "Majuli Island|Dibru Saikhowa", "Assamese Thali|Masor Tenga"},
            {"13", "Odisha", "Temple City", "Jagannath Temple|Sun Temple Konark|Bhubaneswar", "Chilika Lake|Elephanta Caves", "Odia Thali|Rasgulla"},
            {"14", "Jammu Kashmir", "Paradise", "Srinagar, Gulmarg|Pahalgam, Leh|Dal Lake", "Sonmarg|Zanskar Valley", "Rogan Josh|Yakhni"},
            {"15", "Bihar", "Ancient Heritage", "Nalanda|Mahabodhi Temple|Patna", "Vishwa Shanti Stupa|Jal Mandir", "Litti Chokha|Sattu Paratha"}
        };
        
        String[] images = {
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
            "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800",
            "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800",
            "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800",
            "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=800",
            "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
            "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
            "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800"
        };
        
        for (int i = 0; i < destData.length; i++) {
            Map<String, Object> d = new LinkedHashMap<>();
            d.put("id", Integer.parseInt(destData[i][0]));
            d.put("name", destData[i][1]);
            d.put("subtitle", destData[i][2]);
            d.put("famous", destData[i][3].split("\\|"));
            d.put("hidden", destData[i][4].split("\\|"));
            d.put("food", destData[i][5].split("\\|"));
            d.put("image", images[i]);
            destinations.add(d);
        }
        
        // Initialize accommodations
        String[][] accData = {
            {"1", "Taj Palace Hotel", "New Delhi", "hotel", "8500", "4.8", "wifi,restaurant,pool,parking"},
            {"2", "Leela Palace", "Bangalore", "resort", "12000", "4.9", "spa,restaurant,pool,gym"},
            {"3", "Cozy Homestay", "Jaipur", "homestay", "1500", "4.5", "wifi,breakfast,parking"},
            {"4", "ITC Grand Bharat", "Gurgaon", "resort", "15000", "4.9", "golf,pool,spa,restaurant"},
            {"5", "Budget Inn", "Mumbai", "hotel", "2500", "4.0", "wifi,restaurant,parking"},
            {"6", "Kumarakom Lake Resort", "Kumarakom", "resort", "6500", "4.7", "pool,restaurant,spa,boat"},
            {"7", "Backwater Homestay", "Alleppey", "homestay", "1800", "4.6", "wifi,breakfast,boat"},
            {"8", "Grand Hotel", "Chennai", "hotel", "4500", "4.3", "wifi,restaurant,pool,gym"},
            {"9", "Taj Corbett Resort", "Jim Corbett", "resort", "9500", "4.8", "safari,restaurant,nature,pool"},
            {"10", "Goa Beach Resort", "Goa", "resort", "5500", "4.6", "pool,beach,restaurant,bar"},
            {"11", "City Budget Hotel", "Jaipur", "hotel", "2200", "4.1", "wifi,breakfast,parking"},
            {"12", "Heritage Homestay", "Udaipur", "homestay", "3500", "4.7", "wifi,breakfast,heritage,parking"}
        };
        
        String[] accImages = {
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600",
            "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=600",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600"
        };
        
        for (int i = 0; i < accData.length; i++) {
            Map<String, Object> a = new LinkedHashMap<>();
            a.put("id", Integer.parseInt(accData[i][0]));
            a.put("name", accData[i][1]);
            a.put("location", accData[i][2]);
            a.put("type", accData[i][3]);
            a.put("price", "Rs");
            a.put("priceValue", Integer.parseInt(accData[i][4]));
            a.put("rating", Double.parseDouble(accData[i][5]));
            a.put("amenities", accData[i][6].split(","));
            a.put("image", accImages[i]);
            accommodations.add(a);
        }
    }
    
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        
        // Static files handler
        server.createContext("/", exchange -> {
            String path = exchange.getRequestURI().getPath();
            if (path.equals("/")) path = "/index.html";
            
            File file = new File(BASE_DIR + path);
            
            if (file.exists() && !file.isDirectory()) {
                String contentType = getContentType(path);
                exchange.getResponseHeaders().set("Content-Type", contentType);
                
                byte[] content = Files.readAllBytes(file.toPath());
                exchange.sendResponseHeaders(200, content.length);
                OutputStream os = exchange.getResponseBody();
                os.write(content);
                os.close();
            } else {
                String notFound = "404 Not Found";
                exchange.sendResponseHeaders(404, notFound.length());
                OutputStream os = exchange.getResponseBody();
                os.write(notFound.getBytes());
                os.close();
            }
        });
        
        // API: Get all destinations
        server.createContext("/api/destinations", exchange -> {
            String json = toJson(destinations);
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, json.getBytes().length);
            exchange.getResponseBody().write(json.getBytes());
        });
        
        // API: Get accommodations
        server.createContext("/api/accommodations", exchange -> {
            String json = toJson(accommodations);
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, json.getBytes().length);
            exchange.getResponseBody().write(json.getBytes());
        });
        
        // API: Search accommodations
        server.createContext("/api/accommodations/search", exchange -> {
            String query = exchange.getRequestURI().getQuery();
            String searchQ = "";
            String type = "all";
            
            if (query != null) {
                for (String param : query.split("&")) {
                    if (param.startsWith("query=")) {
                        try {
                            searchQ = java.net.URLDecoder.decode(param.substring(6), "UTF-8");
                        } catch (Exception e) {
                            searchQ = param.substring(6);
                        }
                    }
                    if (param.startsWith("type=")) type = param.substring(5);
                }
            }
            
            List<Map<String, Object>> results = new ArrayList<>();
            for (Map<String, Object> a : accommodations) {
                boolean match = true;
                if (!searchQ.isEmpty()) {
                    String name = ((String)a.get("name")).toLowerCase();
                    String loc = ((String)a.get("location")).toLowerCase();
                    String sq = searchQ.toLowerCase();
                    match = name.contains(sq) || loc.contains(sq);
                }
                if (match && !type.equals("all")) {
                    match = ((String)a.get("type")).equals(type);
                }
                if (match) results.add(a);
            }
            
            String json = toJson(results);
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, json.getBytes().length);
            exchange.getResponseBody().write(json.getBytes());
        });
        
        // API: Calculate trip
        server.createContext("/api/calculate-trip", exchange -> {
            BufferedReader reader = new BufferedReader(new InputStreamReader(exchange.getRequestBody()));
            String body = reader.readLine();
            reader.close();
            
            int days = 0, hotelCost = 0, foodCost = 0, travelCost = 0;
            
            try {
                body = body.replace("{", "").replace("}", "");
                for (String part : body.split(",")) {
                    String[] kv = part.split(":");
                    if (kv.length == 2) {
                        String key = kv[0].replace("\"", "").trim();
                        int value = Integer.parseInt(kv[1].trim());
                        switch (key) {
                            case "days": days = value; break;
                            case "hotelCostPerDay": hotelCost = value; break;
                            case "foodCostPerDay": foodCost = value; break;
                            case "travelCost": travelCost = value; break;
                        }
                    }
                }
            } catch (Exception e) {}
            
            int accommodationTotal = days * hotelCost;
            int foodTotal = days * foodCost;
            int total = accommodationTotal + foodTotal + travelCost;
            
            String json = String.format(
                "{\"accommodationTotal\":%d,\"foodTotal\":%d,\"travelCost\":%d,\"total\":%d}",
                accommodationTotal, foodTotal, travelCost, total
            );
            
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, json.getBytes().length);
            exchange.getResponseBody().write(json.getBytes());
        });
        
        // API: Health check
        server.createContext("/api/health", exchange -> {
            String json = "{\"status\":\"OK\",\"message\":\"DeshDarshan API is running\"}";
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, json.getBytes().length);
            exchange.getResponseBody().write(json.getBytes());
        });
        
        server.setExecutor(Executors.newCachedThreadPool());
        server.start();
        
        System.out.println("===========================================");
        System.out.println("  DeshDarshan - Full Stack Travel Website");
        System.out.println("===========================================");
        System.out.println("  Server running at: http://localhost:" + PORT);
        System.out.println("  API available at: http://localhost:" + PORT + "/api");
        System.out.println("===========================================");
        System.out.println("\n  Press Ctrl+C to stop the server");
    }
    
    private static String getContentType(String path) {
        if (path.endsWith(".html")) return "text/html";
        if (path.endsWith(".css")) return "text/css";
        if (path.endsWith(".js")) return "application/javascript";
        if (path.endsWith(".json")) return "application/json";
        if (path.endsWith(".png")) return "image/png";
        if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
        if (path.endsWith(".svg")) return "image/svg+xml";
        return "text/plain";
    }
    
    private static String toJson(List<Map<String, Object>> list) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            sb.append(mapToJson(list.get(i)));
            if (i < list.size() - 1) sb.append(",");
        }
        sb.append("]");
        return sb.toString();
    }
    
    private static String mapToJson(Map<String, Object> map) {
        StringBuilder sb = new StringBuilder("{");
        int count = 0;
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            if (count > 0) sb.append(",");
            sb.append("\"").append(entry.getKey()).append("\":");
            Object value = entry.getValue();
            if (value instanceof Number) {
                sb.append(value);
            } else if (value instanceof List) {
                sb.append(listToJson((List<?>) value));
            } else {
                sb.append("\"").append(escapeJson(value.toString())).append("\"");
            }
            count++;
        }
        sb.append("}");
        return sb.toString();
    }
    
    private static String listToJson(List<?> list) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            if (i > 0) sb.append(",");
            Object item = list.get(i);
            if (item instanceof String) {
                sb.append("\"").append(escapeJson((String)item)).append("\"");
            } else {
                sb.append(item);
            }
        }
        sb.append("]");
        return sb.toString();
    }
    
    private static String escapeJson(String s) {
        return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n").replace("\r", "\\r");
    }
}
