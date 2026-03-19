// Extended Destination data with beautiful images, history, and coordinates
const destinations = [
    {
        id: 1,
        name: "Rajasthan",
        subtitle: "Land of Kings",
        budget: "₹8,000-25,000",
        season: "Oct-Mar",
        region: "west",
        type: ["heritage", "desert"],
        lat: 27.0238,
        lng: 74.2179,
        description: "Experience the royal grandeur of India's most majestic state. From golden deserts to stunning palaces, Rajasthan offers an unforgettable journey into history.",
        history: "Rajasthan was founded by the Rajput clans in the 7th century. The state got its name from 'Rajputstan' meaning land of Rajputs. The brave Rajput warriors ruled these lands for centuries, building magnificent forts and palaces that still stand today.",
        famous: [
            { name: "Hawa Mahal, Jaipur", lat: 26.9239, lng: 75.8267, img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80", desc: "The Palace of Winds - built in 1799 by Maharaja Sawai Pratap Singh for royal ladies to watch street processions", history: "Built from red and pink sandstone, Hawa Mahal has 953 windows called 'jharokhas' designed for royal women to observe city life without being seen." },
            { name: "City Palace, Jaipur", lat: 26.9258, lng: 75.8265, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Royal residence with stunning courtyards", history: "Built by Maharaja Jai Singh II in 1732, this palace complex includes Chandra Mahal, Mukut Mahal, and the famous Peacock Gate." },
            { name: "Lake Palace, Udaipur", lat: 24.6854, lng: 73.8834, img: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&q=80", desc: "Floating palace on Lake Pichola", history: "Built in 1746 by Maharaja Jagat Singh II, this palace was once a royal summer retreat and is now a luxury hotel where James Bond filmed Octopussy." },
            { name: "Mehrangarh Fort, Jodhpur", lat: 26.2979, lng: 73.0184, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Massive fort with panoramic views", history: "Founded by Rao Jodhaji in 1459, this fort rises 400ft above Jodhpur and houses the royal palace with intricate jali work and paintings." },
            { name: "Amber Fort, Jaipur", lat: 26.9855, lng: 75.8516, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "UNESCO World Heritage fort", history: "Built in 1592 by Raja Man Singh I, this fort showcases Hindu fusion architecture with mirrored walls and Sheesh Mahal." },
            { name: "Jaisalmer Fort, Thar", lat: 26.9157, lng: 70.9083, img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", desc: "Golden sandstone fort in desert", history: "Founded by Rawal Jaisal in 1156, this is one of the few living forts where 3000 people still reside inside." },
            { name: "Umaid Bhawan Palace, Jodhpur", lat: 26.2406, lng: 73.0245, img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80", desc: "Art Deco palace built in 20th century", history: "Built between 1929-1943, this palace was the last royal residence built by Maharaja Umaid Singh. It's now a luxury hotel." },
            { name: "Pushkar Lake, Pushkar", lat: 26.4891, lng: 74.5511, img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80", desc: "Sacred lake with 52 ghats", history: "According to legend, Lord Brahma created Pushkar lake after dropping a lotus here. It's one of the most sacred lakes in India." },
            { name: "Albert Hall Museum, Jaipur", lat: 26.9247, lng: 75.8268, img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80", desc: "Oldest museum in Rajasthan", history: "Built in 1881, this museum showcases rare manuscripts, paintings, and artifacts from across Rajasthan." },
            { name: "Nawalgarh, Shekhawati", lat: 27.8421, lng: 75.6053, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Open art gallery with havelis", history: "Known as 'Open Art Gallery of Rajasthan', this town has over 100 decorated havelis with intricate frescoes." }
        ],
        hidden: [
            { name: "Bhangarh Fort, Alwar", lat: 27.0991, lng: 76.2817, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "India's most haunted fort", history: "Built in 1573 by Madho Singh, legend says the town was cursed by a tantric after a magician's son was killed in the palace." },
            { name: "Nakki Lake, Mount Abu", lat: 24.5926, lng: 72.7089, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Only hill station of Rajasthan", history: "According to legend, this lake was created when Lord Shiva dropped his locks of hair here. Mahatma Gandhi's ashes were immersed here." },
            { name: "Chand Baori, Abhaneri", lat: 27.0024, lng: 76.5026, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Ancient stepwell with 3,500 steps", history: "Built in 9th century by King Chandra, this 100ft deep stepwell has 3,500 steps on three sides - a mathematical marvel." },
            { name: "Khimsar Sand Dunes", lat: 27.7228, lng: 73.3647, img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", desc: "Camel safari in golden desert", history: "The Thar Desert was once a green forest 10,000 years ago. The name 'Thar' comes from 'Thar' meaning line, referring to its sandy dunes." },
            { name: "Kumbhalgarh Fort", lat: 25.1490, lng: 73.3534, img: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=800&q=80", desc: "Fort with 36km wall - second longest", history: "Built in 15th century by Rana Kumbha, this fort has the second longest wall in the world after the Great Wall of China." },
            { name: "Ranthambore National Park", lat: 26.0174, lng: 76.5018, img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", desc: "Tiger reserve and ancient fort", history: "Once a royal hunting ground, this park is home to Bengal tigers and has ruins from the 10th century Chauhans." },
            { name: "Taragarh Fort, Bundi", lat: 25.4333, lng: 75.6333, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Star fort with palace ruins", history: "Built in 1354, this fort offers panoramic views. The Bundi paintings inside the palaces are world-famous." },
            { name: "Desert National Park, Jaisalmer", lat: 26.9333, lng: 70.9167, img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", desc: "Sand dunes with fossil beds", history: "This park has fossils of dinosaurs and prehistoric creatures dating back 180 million years." },
            { name: "Sambhar Lake, Jaipur", lat: 27.0489, lng: 75.4238, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "India's largest inland salt lake", history: "This lake produces 9% of India's salt. Flamingos visit here in thousands during winter." },
            { name: "Dundlod Fort, Jhunjhunu", lat: 28.0167, lng: 75.5667, img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80", desc: "Heritage hotel in Shekhawati", history: "This 18th century fort was owned by Rajawat Thakurs and now serves as a heritage hotel." }
        ],
        food: [
            { name: "Daal Baati Churma", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Traditional Rajasthani dal with baked wheat balls", history: "A classic dish of Rajput warriors, baati was baked in cow dung fire for long storage during wars." },
            { name: "Laal Maas", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Spicy red meat curry with Mathania chilies", history: "Created for Rajput kings, this dish uses Mathania chilies grown only near Jodhpur, giving it authentic spiciness." },
            { name: "Gatte ki Sabzi", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Gram flour dumplings in creamy gravy", history: "A dish from Marwar region, gatte were invented to preserve gram flour in desert climate." },
            { name: "Moong Dal Halwa", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Sweet lentil dessert with ghee", history: "Traditionally made for weddings and celebrations, this halwa requires 2 hours of continuous stirring." },
            { name: "Ker Sangri", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Desert beans with dried berries", history: "A traditional Jaisalmer dish made from desert beans and berries, only available in the Thar desert region." },
            { name: "Mawa Kachori", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Sweet pastry with khoya filling", history: "A Jodhpur specialty, this sweet pastry is stuffed with mawa (reduced milk) and dry fruits." },
            { name: "Pyaaj Ki Kachori", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Onion-filled crispy snack", history: "A popular Jodhpur street food, these kachoris are stuffed with spiced onions and served with chutneys." },
            { name: "Mirchi Vada", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Chilli fritters with onion filling", history: "A traditional Jodhpur snack, mirchi vada is made by stuffing green chilies with spiced potatoes and frying." },
            { name: "Besan Ki Chakki", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Gram flour sweet with jaggery", history: "A traditional dessert made from gram flour and jaggery, often served during festivals." },
            { name: "Rajasthani Thali", img: "https://images.unsplash.com/photo-1565399609451-7d1e942e8d14?w=600&q=80", desc: "Complete meal with 10+ items", history: "A traditional Rajasthani thali includes dal, baati, churma, gatte, ker sangri, and more." }
        ],
        images: [
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200"
        ]
    },
    {
        id: 2,
        name: "Kerala",
        subtitle: "God's Own Country",
        budget: "₹10,000-30,000",
        season: "Sep-Mar",
        region: "south",
        type: ["beach", "backwaters", "hillstation"],
        lat: 10.8505,
        lng: 76.2711,
        description: "Discover paradise on Earth with serene backwaters, lush green tea gardens, and pristine beaches. Kerala offers tranquility like nowhere else.",
        history: "Kerala's spice trade dates back to 3000 BC. The legendary Chera dynasty ruled here. Vasco da Gama discovered the sea route to Kerala in 1498, bringing global attention to this spice paradise.",
        famous: [
            { name: "Alleppey Backwaters", lat: 9.5902, lng: 76.3269, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Houseboat cruise through palm-fringed waterways", history: "Alleppey was called 'Venice of the East' by visitors. The backwaters were formed naturally over centuries and houseboats evolved from traditional 'kettuvallams' used to transport rice." },
            { name: "Munnar Tea Gardens", lat: 10.0892, lng: 77.0597, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Rolling green hills covered with tea bushes", history: "British planter J.D. Munro introduced tea cultivation in 1880. Today Munnar produces 10% of India's tea with unique 'white tea' growing here." },
            { name: "Kovalam Beach", lat: 8.4035, lng: 76.9826, img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80", desc: "Golden sands meet Arabian Sea", history: "adiscovered by Maharaja of Travancore in 1930s, Kovalam became famous when Lord Curzon visited and called it 'the Paradise of the South'." },
            { name: "Padmanabhaswamy Temple", lat: 8.4825, lng: 76.9526, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "World's richest temple with stunning architecture", history: "Built in 16th century, this temple has secret vaults discovered in 2011 containing gold worth $22 billion - the richest temple in world." },
            { name: "Varkala Beach", lat: 8.7375, lng: 76.7103, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Cliff beach with spiritual significance", history: "Known for its 2000-year-old Janardanaswamy Temple, this cliff beach is considered one of the top beaches in Asia." },
            { name: "Wayanad Hills", lat: 11.6854, lng: 76.1320, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Misty mountains and coffee plantations", history: "Wayanad has prehistoric rock art dating back to 6000 BC. The name means 'land of paddy fields' in local language." },
            { name: "St. Francis CSI Church", lat: 9.5652, lng: 76.5224, img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80", desc: "India's oldest European church", history: "Built in 1503 by Portuguese, this is one of the oldest European-built churches in India." },
            { name: "Bekal Beach", lat: 12.3912, lng: 75.0343, img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80", desc: "Beautiful beach with fort", history: "This unspoiled beach has a 17th century fort. The Bekal Hole is a unique rock formation." }
        ],
        hidden: [
            { name: "Wayanad Hills", lat: 11.6854, lng: 76.1320, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Misty mountains and coffee plantations", history: "Wayanad has prehistoric rock art dating back to 6000 BC. The name means 'land of paddy fields' in local language." },
            { name: "Pathiramanal Island", lat: 9.6025, lng: 76.4082, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", desc: "Bird watcher's paradise in backwaters", history: "This 10-acre island is said to have been created by a Brahmin who missed his evening prayers and created land from water." },
            { name: "Athirappilly Falls", lat: 10.2851, lng: 76.5947, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Maharashtrian Niagara - India's largest waterfall", history: "Featured in many Bollywood films including Bahubali, this 80ft waterfall is called 'Niagara of South India'." },
            { name: "Kumarakom Bird Sanctuary", lat: 9.6176, lng: 76.4281, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Migratory birds and scenic backwaters", history: "A former rubber plantation, this sanctuary became a bird haven and hosts over 90 species including Siberian storks." },
            { name: "Periyar Wildlife Sanctuary", lat: 9.4328, lng: 77.2717, img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", desc: "Tiger reserve with boat rides", history: "Established in 1895, this sanctuary is one of the oldest wildlife reserves in India and home to Bengal tigers and elephants." },
            { name: "Ponmudi Hills", lat: 8.7615, lng: 77.1342, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "The Golden Peak with misty valleys", history: "At 1100m height, Ponmudi is a serene hill station with tea plantations and rare mountain birds." },
            { name: "Vagamon Hills", lat: 9.6833, lng: 76.9000, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Meadow of adventure activities", history: "At 1100m, this hill station offers paragliding, trekking, and pine forests. Called 'Scotland of Kerala'." },
            { name: "Marari Beach", lat: 9.5813, lng: 76.2841, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Peaceful beach near Alleppey", history: "A pristine beach with Ayurvedic resorts. The name comes from 'Marari' meaning 'beloved'." },
            { name: "Kottayam", lat: 9.5915, lng: 76.5222, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "City of letters and latex", history: "First town to achieve 100% literacy. Known for rubber plantations and ancient churches." },
            { name: "Kumily", lat: 9.6167, lng: 77.1667, img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", desc: "Gateway to Periyar National Park", history: "This town is the base for wildlife safaris and spice plantation tours in Thekkady." }
        ],
        food: [
            { name: "Kerala Sadhya", img: "https://images.unsplash.com/photo-1565399609451-7d1e942e8d14?w=600&q=80", desc: "Traditional feast served on banana leaf", history: "A complete meal with 26 dishes served on banana leaf, sadhya dates back to 16th century with Christian and Hindu influences." },
            { name: "Appam with Stew", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", desc: "Fermented rice pancake with coconut curry", history: "Appam originated from Syrian Christian community in Kerala. The fermentation gives it unique soft center and crispy edges." },
            { name: "Malabar Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80", desc: "Aromatic layered rice with meat", history: "Introduced by Arab traders in 12th century, Malabar biryani uses Khyma rice and Dum style cooking." },
            { name: "Payasam", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Sweet milk pudding with nuts", history: "Originally offered to gods in temples, payasam is served at Onam festival. Each family has their secret recipe." },
            { name: "Karimeen Pollichathu", img: "https://images.unsplash.com/photo-1626645738196-c2a72c7eb30a?w=600&q=80", desc: "Pearl spot fish grilled in banana leaf", history: "A classic dish from the Christian community of Kerala, this fish is marinated with spices and grilled over charcoal." },
            { name: "Idiyappam with Egg Curry", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", desc: "String hoppers with egg gravy", history: "Idiyappam is made from rice flour and is a staple breakfast in Kerala, often paired with egg or chicken curry." },
            { name: "Puttu and Kadala Curry", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Steamed rice cake with black chickpea curry", history: "A traditional Kerala breakfast, puttu is steamed in bamboo or metal cylinders." },
            { name: "Thalappal Kootu Curry", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Ash gourd curry with coconut", history: "A signature Onam dish, this curry combines ash gourd with coconut and spices." },
            { name: "Nadan Kozhi Varuthathu", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Spiced chicken fry", history: "A traditional dish made with local spices and coconut oil, popular in Malabar region." },
            { name: "Palada Payasam", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Sweet rice pudding with milk", history: "The main dessert of Onam sadhya, this payasam takes hours to prepare with patience." }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
            "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200"
        ]
    },
    {
        id: 3,
        name: "Goa",
        subtitle: "Beach Paradise",
        budget: "₹6,000-20,000",
        season: "Sep-May",
        region: "west",
        type: ["beach", "heritage"],
        lat: 15.2993,
        lng: 74.1240,
        description: "India's party capital with pristine beaches, Portuguese heritage, and world-famous nightlife. Sun, sand, and endless fun await!",
        history: "Goa was part of the Maurya Empire in 3rd century BC. From 1510 to 1961, it was ruled by Portuguese who left behind churches, forts, and unique cuisine. It was liberated in 1961 by Indian Army.",
        famous: [
            { name: "Baga Beach", lat: 15.5527, lng: 73.7518, img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80", desc: "Vibrant beach with water sports", history: "Named after the 'Baga' stream, this beach became famous in 1970s when hippies from around the world gathered here." },
            { name: "Basilica of Bom Jesus", lat: 15.5014, lng: 73.9196, img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80", desc: "UNESCO World Heritage church", history: "Built in 1594, this church holds the mortal remains of St. Francis Xavier, whose body remains incorrupt after 400 years." },
            { name: "Dudhsagar Falls", lat: 15.3142, lng: 74.3104, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Majestic four-tiered waterfall", history: "Named 'Sea of Milk' as the white water resembles milk flowing. Legend says a princess cursed the waterfall." },
            { name: "Fort Aguada", lat: 15.4625, lng: 73.7731, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Portuguese fort with lighthouse views", history: "Built in 17th century to guard against Dutch, this fort could store 2 million gallons of water - enough for a year." },
            { name: "Anjuna Flea Market", lat: 15.5785, lng: 73.7412, img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80", desc: "Famous Wednesday market by the beach", history: "Started by hippies in 1950s, this market is now one of India's most famous flea markets with 500+ stalls." },
            { name: "Se Cathedral", lat: 15.5036, lng: 73.9146, img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80", desc: "Largest church in Asia", history: "Built in 1619, this cathedral took 80 years to complete and houses the 'Golden Bell' famous for its echo." },
            { name: "Calangute Beach", lat: 15.5419, lng: 73.7515, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Queen of Beaches in North Goa", history: "The largest beach in North Goa, Calangute was a fishing village turned tourist hotspot in the 1970s." },
            { name: "Chapora Fort", lat: 15.5712, lng: 73.7267, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Fort with Bollywood fame", history: "Built in 1717, this fort gained fame from Bollywood movie 'Dil Chahta Hai'. Offers sunset views." }
        ],
        hidden: [
            { name: "Palolem Beach", lat: 15.0107, lng: 74.0333, img: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&q=80", desc: "Secluded crescent beach with kayaking", history: "One of the few undeveloped beaches, Palolem was featured in the Hindi movie 'Kalyug'. It's known for dolphins." },
            { name: "Spice Plantations", lat: 15.2854, lng: 74.1026, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Tour spice farms and taste Goan cuisine", history: "Portuguese introduced spices like chili, cashew, and potato to India here. Goa's spice trade made it richest colony." },
            { name: "Netravali Wildlife Sanctuary", lat: 15.0471, lng: 74.1106, img: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=800&q=80", desc: "Hidden waterfalls and wildlife", history: "This sanctuary is home to the rare Netravali bison and 40% of India's species - a biodiversity hotspot." },
            { name: "Butterfly Conservatory", lat: 15.1928, lng: 74.1026, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Colorful butterflies in natural habitat", history: "Established in 2001, this conservatory hosts 200+ species including the rare Goan butterfly." },
            { name: "Fort Immaculate Conception", lat: 15.2489, lng: 74.1284, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Ancient fort with panoramic views", history: "Built in 1717, this Portuguese fort offers breathtaking views of the Arabian Sea and nearby beaches." },
            { name: "Chorao Island", lat: 15.5304, lng: 73.8913, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", desc: "Bird sanctuary with pristine nature", history: "This island houses the Dr. Salim Ali Bird Sanctuary, named after the famous ornithologist." },
            { name: "Arambol Beach", lat: 15.6878, lng: 73.6988, img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80", desc: "Beach with sweet water lake", history: "This northern beach has a freshwater lake and is known for its sunset view and meditation retreats." },
            { name: "Dona Paula Beach", lat: 15.4536, lng: 73.9119, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Panoramic view point", history: "Named after a Portuguese noblewoman, this beach offers views of the Marmagao port." },
            { name: "Benaulim Beach", lat: 15.2737, lng: 73.9477, img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80", desc: "Serene beach with fishing village", history: "A peaceful beach where the famous Goan film 'Barsaat' was shot. Known for dolphin tours." },
            { name: "Cansaulim Beach", lat: 15.2833, lng: 73.9500, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Beach with 16th century church", history: "This beach has the 1585 Monteiro Chapel, one of Goa's oldest Christian monuments." }
        ],
        food: [
            { name: "Goan Fish Curry", img: "https://images.unsplash.com/photo-1626645738196-c2a72c7eb30a?w=600&q=80", desc: "Coastal curry with kokum", history: "The Portuguese introduced chili to India here. This curry uses kokum fruit unique to Goa's coastal climate." },
            { name: "Pork Vindaloo", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", desc: "Spicy pork in wine vinegar gravy", history: "Derived from Portuguese 'Vinha d'Alho' (wine and garlic), this dish was modified with local spices and chilies." },
            { name: "Bebinca", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Layered coconut dessert", history: "A 16-layer dessert taking 4 hours to make. Each layer is flipped manually - a tradition from Portuguese nuns." },
            { name: "Feni", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80", desc: "Local cashew feni liquor", history: "Goa's signature liquor made from cashew apples, Feni has been produced here since 16th century Portuguese era." },
            { name: "Chicken Xacuti", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", desc: "Spicy chicken with coconut gravy", history: "A Portuguese-influenced dish using red chilies and coconut, one of Goa's most popular curries." },
            { name: "Sol Kadhi", img: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=600&q=80", desc: "Digestive drink with kokum and coconut milk", history: "A pink digestive drink served after meals, made from kokum and coconut milk - unique to Goan cuisine." },
            { name: "Chicken Cafreal", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Green masala chicken curry", history: "A Portuguese dish modified with green chilies, coriander, and spices - unique to Goan Christian cuisine." },
            { name: "Sorpotel", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", desc: "Spiced pork offal curry", history: "A traditional Goan dish using pork blood and liver, influenced by Portuguese cooking techniques." },
            { name: "Khatkhatem", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Vegetarian stew with kokum", history: "A Konkani dish made with vegetables and kokum, popular during festivals." },
            { name: "Goan Sannas", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", desc: "Steamed rice cakes", history: "A traditional Goan breakfast item similar to idli but made with toddy palm sap." }
        ],
        images: [
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200",
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200"
        ]
    },
    {
        id: 4,
        name: "Uttarakhand",
        subtitle: "Dev Bhoomi",
        budget: "₹7,000-22,000",
        season: "Mar-Jun, Sep-Nov",
        region: "north",
        type: ["mountain", "heritage", "spiritual"],
        lat: 30.0668,
        lng: 79.0193,
        description: "The land of gods with snow-capped Himalayas, sacred rivers, and spiritual retreats. Experience divine peace in the mountains.",
        history: "Known as 'Land of Gods', Uttarakhand is mentioned in ancient Hindu texts. It was formed in 2000 as India's 10th state from Uttaranchal. The Char Dham Yatra is one of the holiest pilgrimages.",
        famous: [
            { name: "Haridwar", lat: 29.9457, lng: 78.1703, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Gateway to the gods with Ganga aarti", history: "One of the 7 holiest cities, Haridwar is where Ganga leaves mountains. The famous Kumbh Mela is held here every 12 years." },
            { name: "Rishikesh", lat: 30.0869, lng: 78.2676, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Yoga capital of the world", history: "The Beatles visited Rishikesh in 1968 to learn Transcendental Meditation at Maharishi Mahesh Yogi's ashram." },
            { name: "Nainital", lat: 29.3919, lng: 79.4542, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Lake paradise in Kumaon hills", history: "Founded in 1841 by British, Nainital was summer capital of United Provinces. The lake is shaped like an eye (naina)." },
            { name: "Mussoorie", lat: 30.4597, lng: 78.0644, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Queen of Hills with panoramic views", history: "Founded in 1843 by British officer, Mussoorie became popular when King of Nepal gifted 300 deodar trees." },
            { name: "Jim Corbett National Park", lat: 29.5300, lng: 78.9350, img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", desc: "India's oldest national park", history: "Established in 1936 as Hailey National Park, this was India's first national park and home to Bengal tigers." },
            { name: "Kedarnath Temple", lat: 30.9676, lng: 79.0673, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "One of Char Dham pilgrimage sites", history: "Built in 8th century by Adi Shankaracharya, this temple is dedicated to Lord Shiva at 11,755ft altitude." }
        ],
        hidden: [
            { name: "Valley of Flowers", lat: 30.7254, lng: 79.6159, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "UNESCO site with alpine flowers", history: "Discovered in 1931 by Frank Smith, this valley blooms with 500+ flower species including blue poppies." },
            { name: "Mukteshwar", lat: 29.4716, lng: 79.6516, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Temple town with mountain views", history: "Named after Mukteswar temple built in 12th century, this was where Gwalior kings meditated." },
            { name: "Pauri Garhwal", lat: 29.9141, lng: 78.5389, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Ancient temples and pristine nature", history: "This region produced maximum freedom fighters. The Tehri dam's displacement created a new lake here." },
            { name: "Chakrata", lat: 30.7005, lng: 77.8632, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Colonial cantonment with pine forests", history: "Established in 1866 as British cantonment, Chakrata is named after a local deity." },
            { name: "Binsar Wildlife Sanctuary", lat: 29.6950, lng: 79.8690, img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", desc: "Zero pollution zone with Himalayan views", history: "Established in 1988, this sanctuary is home to leopards, musk deer and offers 300km Himalayan views." },
            { name: "Kausani", lat: 29.8524, lng: 79.5968, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Switzerland of India with tea gardens", history: "Gandhi called this 'Rishikesh of South', the Himalayas look like a snake from here during sunrise." }
        ],
        food: [
            { name: "Aloo Ke Gutke", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Spiced potato dish with pickles", history: "A traditional Kumaoni dish, gutke uses sun-dried potatoes preserved for winter months." },
            { name: "Bal Mithai", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Fudge made with milk and poppy seeds", history: "The royal sweet of Tehri Garhwal, invented by the royal kitchen, now sold by every sweet shop in the region." },
            { name: "Chainsoo", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", desc: "Black gram dal preparation", history: "A Garhwali dish, chainsoo is made from locally grown black gram and cooked with bhuna onions." },
            { name: "Gulgula", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Sweet fried doughnuts", history: "Traditional offering to gods during festivals, gulgula is made from jaggery and wheat flour." },
            { name: "Kap (Madua Roti)", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Finger millet bread with ghee", history: "A staple food of the mountains, this bread made from ragi is highly nutritious and kept warm in ashes." },
            { name: "Singori", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Sweet wrapped in leaf cone", history: "ADelicacy of Almora, this sweet is made with khoya and wrapped in mauni leaf for unique flavor." }
        ],
        images: [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200"
        ]
    },
    {
        id: 5,
        name: "Tamil Nadu",
        subtitle: "Temple Land",
        budget: "₹8,000-20,000",
        season: "Oct-Mar",
        region: "south",
        type: ["heritage", "temple", "hillstation"],
        lat: 11.1271,
        lng: 78.6569,
        description: "Home to ancient Dravidian temples, classical dance forms, and beautiful hill stations. Immerse in South Indian culture and heritage.",
        history: "Tamil Nadu has continuous civilization for 5000 years. The Chola, Pandya, and Chera dynasties built magnificent temples. Classical dance form Bharatanatyam originated in temples here.",
        famous: [
            { name: "Meenakshi Temple, Madurai", lat: 9.9195, lng: 78.1143, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Magnificent temple with 1000 pillars", history: "Built in 6th century BCE, this temple has 33,000 sculptures. The golden lotus vimana is covered with pure gold." },
            { name: "Shore Temple, Mahabalipuram", lat: 12.6163, lng: 80.1916, img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80", desc: "UNESCO World Heritage seafront temple", history: "Built in 8th century by Pallava king Narasimhavarman, this is India's first seaside stone temple." },
            { name: "Ooty", lat: 11.4102, lng: 76.6950, img: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=800&q=80", desc: "Queen of Nilgiri hills with tea gardens", history: "Ooty was called 'Udhagamandalam'. The Nilgiri mountain railway (toy train) is a UNESCO World Heritage." },
            { name: "Kodaikanal", lat: 10.2381, lng: 77.4892, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Princess of hill stations with star-shaped lake", history: "Founded in 1845 by American missionaries, Kodaikanal means 'gift of the forest' in Tamil." },
            { name: "Brihadeeswarar Temple", lat: 10.7829, lng: 79.1318, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Big Temple of Thanjavur", history: "Built in 11th century by Raja Raja Chola I, this is India's first complete granite temple with 216ft vimana." },
            { name: "Marina Beach", lat: 13.0827, lng: 80.2707, img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80", desc: "Second longest beach in the world", history: "This beach was created in 1881 when the British built theengg Bund to prevent sea erosion in Chennai." }
        ],
        hidden: [
            { name: "Vellore Golden Temple", lat: 12.9592, lng: 79.1343, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Stunning marble temple with gold plating", history: "Built in 2007, this BAPS temple features 24kg gold gilding and displays scenes from Ramayana." },
            { name: "Kolukkumalai Tea Estate", lat: 8.9000, lng: 77.5000, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "World's highest tea plantation", history: "At 8000ft, this estate produces tea without pesticides. The tea here is hand-plucked and sun-dried." },
            { name: "Velankanni Beach", lat: 10.6833, lng: 79.9833, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Lourdes of the East with Basilica", history: "This beach town houses the famous Velankanni Church, one of India's most visited pilgrimage sites." },
            { name: "Kumbakonam", lat: 11.0000, lng: 79.4000, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Temple town with 188 shrines", history: "Called 'City of Temples', Kumbakonam was the capital of Chola kings. The Mahamaham festival draws millions." },
            { name: "Gingee Fort", lat: 12.2500, lng: 79.4167, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: " impregnable fort with seven walls", history: "Built by Chola kings and strengthened by Marathas, this fort is considered more secure than Daulatabad." },
            { name: "Namakkal Fort", lat: 11.2167, lng: 78.1667, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Rock fort with 80ft statue", history: "This 13th century fort has a huge statue of Narasimha. The wind blows through 18 holes in the rock." }
        ],
        food: [
            { name: "Chettinad Chicken", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Spicy curry with star anise and marathi moggu", history: "Chettinad region was famous for spice trade. This dish uses 15+ spices including unique ingredients." },
            { name: "Dosa & Sambar", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", desc: "Crispy rice pancake with lentil stew", history: "Dosa dates back to 100 AD. The batter fermentation is similar to ancient Greek bread making." },
            { name: "Tamil Thali", img: "https://images.unsplash.com/photo-1565399609451-7d1e942e8d14?w=600&q=80", desc: "Complete meal served on banana leaf", history: "Traditional thali includes 6-7 dishes arranged in specific order. Banana leaf is eco-friendly and adds flavor." },
            { name: "Filter Coffee", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", desc: "Strong coffee in brass tumbler", history: "Introduced by Indian coffee trade, filter coffee uses the 'degham' method unique to South India since 1900s." },
            { name: "Chicken 65", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", desc: "Spicy fried chicken appetizer", history: "Created in 1965 at Buhari Hotel Chennai, this dish was numbered 65 as it was the 65th item on their menu." },
            { name: "Parotta with Kothu", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Layered bread with shredded chicken", history: "A hybrid dish from Tamil Nadu, parotta is layered bread and kothu means shredded in Tamil." }
        ],
        images: [
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200",
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200"
        ]
    },
    {
        id: 6,
        name: "Maharashtra",
        subtitle: "Financial Capital",
        budget: "₹7,000-25,000",
        season: "Oct-Mar",
        region: "west",
        type: ["heritage", "beach", "hillstation"],
        lat: 19.7515,
        lng: 75.7139,
        description: "From Bollywood glitz to ancient caves, Maharashtra has it all. Explore the maximum city's energy and Maharashtra's rich heritage.",
        history: "Maharashtra was ruled by great dynasties including Mauryas, Satavahanas, and Marathas. Chhatrapati Shivaji founded the Maratha empire in 1674. Mumbai became financial capital after port development in 1800s.",
        famous: [
            { name: "Gateway of India, Mumbai", lat: 18.9220, lng: 72.8347, img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80", desc: "Iconic monument overlooking Arabian Sea", history: "Built in 1924 to welcome King George V, this basalt arch witnessed British leaving India in 1948." },
            { name: "Ajanta Caves", lat: 20.5517, lng: 75.7038, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Ancient Buddhist rock-cut caves", history: "Carved between 200 BC-600 AD, these 30 caves have Buddhist sculptures and paintings from ancient times." },
            { name: "Ellora Caves", lat: 20.0262, lng: 75.1769, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Largest rock-cut ancient temple complex", history: "Built between 600-1000 AD, these 34 caves include the massive Kailasa temple carved from single rock." },
            { name: "Marine Drive, Mumbai", lat: 18.9438, lng: 72.8234, img: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&q=80", desc: "Queen's Necklace - stunning sea view", history: "Built in 1921, this 3km road was called 'Queen's Necklace' because lights at night look like a necklace." },
            { name: "Shirdi Sai Baba Temple", lat: 19.7704, lng: 74.4784, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Most visited pilgrimage site in India", history: "Sai Baba lived here from 1858-1918. Over 50 lakh devotees visit annually making it India's richest temple." },
            { name: "Siddhivinayak Temple", lat: 18.9535, lng: 72.8363, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Mumbai's most visited temple", history: "Built in 1801, this temple of Lord Ganesha is visited by celebrities and politicians before important events." }
        ],
        hidden: [
            { name: "Malshej Ghat", lat: 19.5122, lng: 73.5319, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Misty mountain pass with waterfalls", history: "This ghat was part of ancient trade route. Known for flamingos arriving in monsoons." },
            { name: "Kaas Plateau", lat: 17.7195, lng: 73.6825, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Valley of flowers like Kashmir", history: "Discovered in 1990s, this plateau blooms with 150+ flower species after monsoons, looking like Kashmir valley." },
            { name: "Mahabaleshwar", lat: 17.9305, lng: 73.6293, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Green plateau with strawberry farms", history: "British summer capital in 1828, Mahabaleshwar has 360-degree view points and India's largest strawberry farms." },
            { name: "Torna Fort", lat: 18.2823, lng: 73.5909, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Trekking to historic fort", history: "Conquered by Shivaji in 1645, this was his first fort. At 1400m, it offers panoramic Sahyadri views." },
            { name: "Raigad Fort", lat: 18.2333, lng: 73.1167, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Capital of Maratha empire", history: "Shivaji made this his capital in 1674. The fort can only be reached by climbing 1700 steps." },
            { name: "Brahmagiri Wildlife Sanctuary", lat: 20.1667, lng: 74.0833, img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", desc: "Mountain peaks and waterfalls", history: "This sanctuary is home to tigers, leopards, and over 150 bird species. The mountain is considered sacred." }
        ],
        food: [
            { name: "Vada Pav", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Spiced potato fritter in bread", history: "Created in 1960s by Ashok Vaidya at Dadar station, this is Mumbai's unofficial national snack." },
            { name: "Pav Bhaji", img: "https://images.unsplash.com/photo-1626645738196-c2a72c7eb30a?w=600&q=80", desc: "Mashed vegetable curry with bread", history: "Invented in 1850s as quick lunch for textile workers, pav bhaji became Mumbai street food icon." },
            { name: "Misal Pav", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Sprouts curry with bread", history: "Puneri specialty, misal was created by Kudal family using moth beans. It has GI tag now." },
            { name: "Puran Poli", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Sweet flatbread with jaggery", history: "Marathi new year special, puran poli has chana dal and jaggery filling. Each state has its version." },
            { name: "Modak", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Lord Ganesha's favorite sweet", history: "Modak means 'delight'. Lord Ganesha is believed to have 26 varieties. The sweet is steamed with coconut filling." },
            { name: "Kothimbir Vadi", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Coriander fritters", history: "A traditional Maharashtrian snack, this dish uses fresh coriander and gram flour, often served with tamarind chutney." }
        ],
        images: [
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200",
            "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=1200"
        ]
    },
    {
        id: 7,
        name: "Gujarat",
        subtitle: "Vibrant Heritage",
        budget: "₹6,000-18,000",
        season: "Oct-Mar",
        region: "west",
        type: ["heritage", "wildlife", "beach"],
        lat: 22.2587,
        lng: 71.1924,
        description: "Land of legends, lions, and lip-smacking food. From the world's tallest statue to the white salt desert, Gujarat amazes all.",
        history: "Gujarat was home to Indus Valley Civilization (Lothal). Lord Krishna's kingdom was here. Sardar Patel united India. Gandhi was born here. The state was formed in 1960.",
        famous: [
            { name: "Statue of Unity", lat: 21.8381, lng: 73.7166, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "World's tallest statue - 182m tall", history: "Built in 2018, this statue of Sardar Patel cost Rs 3000 crore and is twice the height of Statue of Liberty." },
            { name: "Sabarmati Ashram, Ahmedabad", lat: 23.0686, lng: 72.5857, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Mahatma Gandhi's residence", history: "Gandhi lived here from 1917-1930 during India's freedom struggle. His birthday Oct 2 is International Day of Non-Violence." },
            { name: "Rann of Kutch", lat: 23.9618, lng: 69.6048, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "White salt desert under full moon", history: "This salt marsh was part of Arabian Sea 10,000 years ago. The Rann Utsav transforms this barren land into a festival ground." },
            { name: "Dwarka", lat: 22.2444, lng: 68.9686, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Lord Krishna's ancient kingdom", history: "One of Char Dham, Dwarka's original name was Saurashtra. Krishna built this city after Mathura. 56 Shankaracharya temples surround it." },
            { name: "Somnath Temple", lat: 20.8882, lng: 70.4020, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "First of 12 Jyotirlinga temples", history: "This temple has been destroyed and rebuilt 16 times. The current structure was built in 1951 after independence." },
            { name: "Akshardham, Gandhinagar", lat: 23.0733, lng: 72.5961, img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80", desc: "Largest Hindu temple complex", history: "Built in 2006, this complex has 7,000 tonnes of carved sandstone and depicts 10,000 years of Indian history." }
        ],
        hidden: [
            { name: "Gir National Park", lat: 21.1213, lng: 70.8122, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Last home of Asiatic lions", history: "Only place in world where Asiatic lions exist in wild. In 1968, only 177 lions survived; now over 700." },
            { name: "Modhera Sun Temple", lat: 23.5876, lng: 71.9509, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Architectural marvel from 11th century", history: "Built by King Bhimdev I in 1026, this temple has 52 pillars representing 52 weeks. Sun rays hit the deity at equinox." },
            { name: "Champaner", lat: 22.9854, lng: 73.5352, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "UNESCO city with stepwells", history: "Founded in 8th century, Champaner has 100 stepwells (bawdis). The Pavagadh hill has Chalcolithic ruins." },
            { name: "White Rann", lat: 23.7833, lng: 69.5667, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Salt desert during full moon", history: "The 7500 sq km salt marsh produces 75% of India's salt. During full moon, the white desert glows mystically." },
            { name: "Patan", lat: 23.8500, lng: 72.1000, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "City with 5000 year old Patola weaving", history: "Founded in 8th century, Patan is famous for double ikat Patola sarees taking 6 months to make." },
            { name: "Mandvi Beach", lat: 22.8300, lng: 69.3500, img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80", desc: "Clean beach with Erada 16th century ship", history: "This 300-year-old wooden ship was used for trade with East Africa. The beach has stable titanium dioxide content." }
        ],
        food: [
            { name: "Dhokla", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Steamed fermented rice cake", history: "Originated in Saurashtra region, dhokla was invented as healthy snack. It's fermented like idli but uses different grains." },
            { name: "Thepla", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Methi flatbread with yogurt", history: "Gujarati breakfast staple, thepla was created using fenugreek for medicinal benefits. It travels well." },
            { name: "Undhiyu", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Mixed vegetable curry", history: "Traditional winter dish from Surat, undhiyu is cooked underground (undhu) with seasonal vegetables." },
            { name: "Khandvi", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Rolled gram flour snack", history: "Named after King Khand, this delicate snack needs 24 hours to prepare. Each roll takes expert hands." }
        ],
        images: [
            "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=1200",
            "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200"
        ]
    },
    {
        id: 8,
        name: "West Bengal",
        subtitle: "Cultural Hub",
        lat: 22.9868,
        lng: 87.8550,
        description: "From the majestic Himalayas to the mangroves, West Bengal offers diverse experiences. Bengal's culture, cuisine, and warmth are unmatched.",
        history: "Bengal was ruled by Pala, Sen, and British dynasties. Kolkata was British capital. Bengal Renaissance brought social reforms. Rabindranath Tagore won Nobel Prize here.",
        famous: [
            { name: "Victoria Memorial, Kolkata", lat: 22.5447, lng: 88.3425, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Marble masterpiece in white", history: "Built in 1921 to commemorate Queen Victoria, this museum has 28 galleries with 50,000 artifacts." },
            { name: "Darjeeling", lat: 27.0410, lng: 88.2663, img: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=800&q=80", desc: "Toy train through tea gardens", history: "Darjeeling tea was discovered by British in 1841. The toy train (UNESCO) has been running since 1881." },
            { name: "Sundarbans", lat: 21.9495, lng: 88.8961, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Royal Bengal tiger habitat", history: "Largest mangrove forest, Sundarbans is shared with Bangladesh. Tiger swimming is unique here." },
            { name: "Howrah Bridge", lat: 22.5851, lng: 88.3268, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Busiest bridge in the world", history: "Opened in 1943, this cantilever bridge has no nuts-bolts - only rivets! 100,000 vehicles cross daily." }
        ],
        hidden: [
            { name: "Bishnupur", lat: 23.0687, lng: 87.3247, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Temple town with terracotta art", history: "Capital of Malla kingdom from 16th-18th century, Bishnupur has 30 terracotta temples known for Bankura horse." },
            { name: "Murshidabad", lat: 24.1457, lng: 88.2680, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Nawab's capital with palaces", history: "Capital of Bengal during Nawab era, Murshidabad has Hazarduari Palace with 1000 doors." },
            { name: "Dooars", lat: 26.9197, lng: 89.1842, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Gateway to Bhutan with wildlife", history: "The name means 'gateway', Dooars connects India to Bhutan. Tea gardens here produce famous flush teas." },
            { name: "Shantiniketan", lat: 23.6783, lng: 87.6856, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Rabindranath Tagore's dream village", history: "Founded by Tagore in 1901, Visva-Bharati University here combines Indian and Western education." }
        ],
        food: [
            { name: "Rosogolla", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Spongy cottage cheese in syrup", history: "Created by Nabin Chandra Das in 1868, Bengal's rosogolla got GI tag in 2017 after 5-year battle with Odisha." },
            { name: "Misti Doi", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", desc: "Sweet yogurt with jaggery", history: "Created at Bhim Nag in Kolkata, misti doi uses jaggery instead of sugar for caramel taste." },
            { name: "Kosha Mangsho", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Slow-cooked mutton curry", history: "Easter special dish, kosha means 'covered' - cooked in covered pot for 4 hours for melt-in-mouth meat." },
            { name: "Phuchka", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Crispy puri with tangy water", history: "Different from panipuri, phuchka has potato filling and tamarind water. Originated in North Kolkata." }
        ],
        images: [
            "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=1200",
            "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=1200"
        ]
    },
    {
        id: 9,
        name: "Punjab",
        subtitle: "Granary of India",
        lat: 31.1471,
        lng: 75.3412,
        description: "Land of five rivers, golden fields, and golden hearts. Experience Punjabi warmth, folk music, and lip-smacking food!",
        history: "Punjab means 'land of five rivers'. It was the cradle of Indus Valley Civilization. Guru Nanak founded Sikhism here. The Green Revolution made Punjab India's breadbasket.",
        famous: [
            { name: "Golden Temple, Amritsar", lat: 31.6203, lng: 74.8764, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Divine spiritual center with langar", history: "Built in 1604 by Guru Arjan, the temple is covered with 750kg gold. The langar serves 100,000 daily free meals." },
            { name: "Jallianwala Bagh", lat: 31.6077, lng: 74.8817, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Memorial of 1919 massacre", history: "On April 13, 1919, British General Dyer fired on unarmed crowd, killing 1500. The martyr's well still exists inside." },
            { name: "Wagah Border", lat: 31.6044, lng: 74.5534, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Beating retreat ceremony", history: "Since 1959, the elaborate ceremony shows border closing. Soldiers do high kicks in synchrony." },
            { name: "Rock Garden, Chandigarh", lat: 30.7489, lng: 76.7538, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Eclectic garden from industrial waste", history: "Created by Nek Chand from industrial waste, this garden has sculptures made from tiles, glasses, and bangles." }
        ],
        hidden: [
            { name: "Anandpur Sahib", lat: 31.2324, lng: 76.4942, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Sikhism's holiest shrine", history: "Founded by Guru Tegh Bahadur in 1665, Anandpur means 'city of bliss'. Khalsa was founded here in 1699." },
            { name: "Patiala", lat: 30.3398, lng: 76.3869, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Royal city with palaces and peg", history: "Patiala was famous for 'Patiala peg' - large whiskey measure. The Qila Mubarak complex has 100 rooms." },
            { name: "Kangra Fort", lat: 32.0954, lng: 76.2699, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Ancient fort with Himalayan views", history: "Built by Katoch dynasty in 1000 BC, this is Himachal's oldest fort. Art from Kangra school dates to 1000 AD." },
            { name: "Bathinda Fort", lat: 30.2067, lng: 74.9515, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Historic fort with royal chambers", history: "Built by Raja Birch in 1000 AD, this fort has 10 gates. It was the residence of Mughal emperor Humayun." }
        ],
        food: [
            { name: "Sarson Da Saag", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Mustard greens with maize bread", history: "Winter staple, saag is made from 7 greens. The makki roti uses corn for that perfect winter warmth." },
            { name: "Makki Di Roti", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Cornbread with ghee", history: "Cornbread was peasant food but became royal when topped with white butter. Served with gur (jaggery)." },
            { name: "Lassi", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", desc: "Sweet yogurt drink in kulhad", history: "In kulhad (clay cup), lassi is traditional. Famous shops use giant glasses called 'sehti'." },
            { name: "Tandoori Chicken", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Clay oven roasted chicken", history: "Invented by Kundan Lal Gujral in Peshawar, this became world-famous after partition when he moved to Delhi." }
        ],
        images: [
            "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=1200",
            "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200"
        ]
    },
    {
        id: 10,
        name: "Karnataka",
        subtitle: "Silicon Valley",
        lat: 15.3173,
        lng: 75.7139,
        description: "From royal palaces to ancient ruins, tech hubs to coffee plantations. Karnataka is India's most diverse destination!",
        history: "Karnataka has continuous history from 3rd century BC. The Kadambas founded first Kannada kingdom. The Vijayanagara Empire built Hampi. Bangalore became IT hub in 1990s.",
        famous: [
            { name: "Mysore Palace", lat: 12.3052, lng: 76.6551, img: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=800&q=80", desc: "Incredible illuminated palace", history: "Built in 1912, this palace has 125kg gold. At Dasara, 9000 bulbs illuminate it like a fairy tale." },
            { name: "Hampi", lat: 15.3350, lng: 76.5100, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Ruins of Vijayanagara empire", history: "At its peak (1500 AD), Hampi was world's second largest city with 500,000 people. Destroyed in 1565 battle." },
            { name: "Coorg", lat: 12.3376, lng: 75.8069, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Scotland of India with coffee", history: "Kodavas are ancient warriors from here. Coffee was introduced by British in 1854. Abbey Falls is Insta-famous." },
            { name: "Bangalore Palace", lat: 12.9980, lng: 77.5915, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Tudor-style royal palace", history: "Built in 1887 by Chamarajendra Wadiyar, this palace has Italian carvings and ballroom. Summer music festival is held here." }
        ],
        hidden: [
            { name: "Badami Cave Temples", lat: 15.9186, lng: 75.6826, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Rock-cut caves with sculptures", history: "Built by Chalukyas in 6th century, these 4 caves have Hindu, Jain, and Buddhist sculptures." },
            { name: "Bandipur National Park", lat: 11.6626, lng: 76.6407, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Tiger reserve with safaris", history: "Part of Nilgiri Biosphere, Bandipur has tigers, elephants, and gaurs. Evening safari is magical." },
            { name: "Jog Falls", lat: 14.2351, lng: 74.8071, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Second highest waterfall in India", history: "Named after King Rani, Jog falls drop 253m. During monsoon, they become one huge curtain of water." },
            { name: "Halebid", lat: 13.2135, lng: 76.0553, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Hoysala temples with intricate carvings", history: "Halebid means 'old capital'. The Hoysaleswara temple has 2000 sculptures on walls." }
        ],
        food: [
            { name: "Bisi Bele Bath", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", desc: "Spiced rice with lentils", history: "Mysore's trademark dish, bisi bele bath translates to 'hot lentil rice'. It's a complete meal." },
            { name: "Mysore Pak", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Ghee-rich sweet", history: "Created in 19th century royal kitchen, mysore pak uses generous ghee. The traditional recipe uses 1:1:1 ratio." },
            { name: "Dosa", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", desc: "Crispy rice crepe with fillings", history: "Dosa originated in Karnataka. The Masala Dosa was invented in Udupi in 1900s." },
            { name: "Filter Coffee", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", desc: "Strong coffee in brass cups", history: "Karnataka produces 70% of India's coffee. The filter coffee tradition uses 'dip method' from Mysore." }
        ],
        images: [
            "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=1200",
            "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200"
        ]
    },
    {
        id: 11,
        name: "Madhya Pradesh",
        subtitle: "Heart of India",
        lat: 23.4735,
        lng: 77.9479,
        description: "At India's geographic center lies a treasure of ancient temples, wildlife, and Buddhist heritage. Central India's hidden gem!",
        history: "Madhya Pradesh was the heart of ancient India. The Mauryan empire ruled from here. It's the only state touching 5 others. The Sanchi Stupa was built by Ashoka.",
        famous: [
            { name: "Khajuraho Temples", lat: 24.8782, lng: 80.0458, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "UNESCO temples with intricate carvings", history: "Built by Chandela dynasty between 950-1050 AD, only 25 of original 85 temples survive. Famous for exquisite sculptures." },
            { name: "Kanha National Park", lat: 23.7500, lng: 80.5833, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Real jungle book setting", history: "Rudyard Kipling wrote Jungle Book inspired by Kanha. It's India's largest tiger reserve." },
            { name: "Bhimbetka Caves", lat: 22.9930, lng: 77.6082, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Prehistoric cave paintings", history: "Cave paintings dating back to 100,000 BC! UNESCO site shows evolution of human art over 30,000 years." },
            { name: "Sanchi Stupa", lat: 23.4818, lng: 77.7436, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Buddhist monument since 3rd century BC", history: "Built by Emperor Ashoka, this is Buddha's oldest monument. The Great Stupa has 40m high gateways." }
        ],
        hidden: [
            { name: "Pachmarhi", lat: 22.4447, lng: 78.4342, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Queen of Satpura with caves", history: "British cantonment in 1800s, Pachmarhi means 'home of five caves'. Handicrafts center showcases tribal art." },
            { name: "Bhedaghat", lat: 23.1315, lng: 79.8093, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Marble rocks on Narmada river", history: "The white marble gorge is 8km long. Boat ride through marble rocks at moonlight is magical." },
            { name: "Mandu", lat: 22.3677, lng: 75.6284, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Fort city with Afghan heritage", history: "Built by Mughals on Afghan pattern, Mandu has Rani Roopmati's pavilion where she could see Bazpur." },
            { name: "Pench National Park", lat: 21.4583, lng: 79.4561, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Tiger reserve with diverse wildlife", history: "Pench means 'tiger territory'. Mowgli's village from Jungle Book is here." }
        ],
        food: [
            { name: "Bhutte Ka Kees", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Grated corn with milk", history: "Monsoon specialty, bhutte (young corn) is grated and cooked in milk. Served with jaggery." },
            { name: "Poha Jalebi", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Flattened rice with crispy jalebi", history: "Indore's famous breakfast combo, poha was popular with Maharashtrian settlers." },
            { name: "Dal Bafla", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Round breads in dal", history: "Similar to Rajasthani dal baati, bafla is baked then dunked in dal with ghee." },
            { name: "Mawa Bhutte", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Sweet corn with khoya", history: "Monsoon street food, corn is grilled then topped with khoya and dry fruits." }
        ],
        images: [
            "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200"
        ]
    },
    {
        id: 12,
        name: "Assam",
        subtitle: "Tea Garden Paradise",
        lat: 26.2006,
        lng: 92.9376,
        description: "Land of one-horned rhinoceros, aromatic tea, and ancient temples. Northeast India's crown jewel awaits!",
        history: "Assam has evidence of prehistoric civilization. The Ahom dynasty ruled for 600 years. British discovered tea here in 1823. It's India's largest tea producer.",
        famous: [
            { name: "Kaziranga National Park", lat: 26.5777, lng: 93.3542, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Home to 70% world rhinos", history: "Kaziranga had only 12 rhinos in 1905; conservation increased numbers to 2600+. One-horned rhinos exist only here." },
            { name: "Tea Gardens, Jorhat", lat: 26.7437, lng: 94.2034, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Endless green tea bushes", history: "Assam produces world's largest tea. Tea was discovered here when wild tea was found growing naturally." },
            { name: "Kamakhya Temple, Guwahati", lat: 26.2621, lng: 91.7932, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "One of Shakti Peethas", history: "One of 51 Shakti Peethas, this temple is where Sati's womb fell. Famous for Ambubachi Mela." },
            { name: "Majuli Island", lat: 26.9377, lng: 94.1092, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "World's largest river island", history: "Once 1200 sq km, Majuli is now 400 sq km due to erosion. It's the center of Vaishnavite culture." }
        ],
        hidden: [
            { name: "Dibru Saikhowa", lat: 27.5023, lng: 95.4114, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Wildlife sanctuary with feral horses", history: "Dibru Saikhowa is known for wild horses that are descendants of Burmese army horses." },
            { name: "Manas National Park", lat: 26.7291, lng: 90.8657, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "UNESCO tiger reserve", history: "Manas is tiger reserve, elephant reserve, and UNESCO. It has 21 of India's endangered species." },
            { name: "Haflong", lat: 25.1621, lng: 92.8706, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Scotland of the East", history: "Haflong means 'blue lake'. This Dima Hasao district headquarters is only hill station in Assam." },
            { name: "Sivasagar", lat: 26.9833, lng: 94.6333, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Ahom capital with temples", history: "Capital of Ahom dynasty for 600 years, Sivasagar has 3 monuments: Shiva Dol, Vishnu Dol, Devi Dol." }
        ],
        food: [
            { name: "Assamese Thali", img: "https://images.unsplash.com/photo-1565399609451-7d1e942e8d14?w=600&q=80", desc: "Traditional meal with rice and fish", history: "Rice is staple in Assam. The 'bhoona' style cooking is unique. Khar is the traditional dish." },
            { name: "Masor Tenga", img: "https://images.unsplash.com/photo-1626645738196-c2a72c7eb30a?w=600&q=80", desc: "Sour fish curry", history: "Masor means fish, tenga means sour. The sourness comes from khorika (tamarind) or tomatoes." },
            { name: "Khar", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Alkaline dish with raw papaya", history: "Khar is made from raw papaya cooked with pulses. It's considered very healthy." },
            { name: "Xâu", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Pork stick with bamboo", history: "Xâu is dry pork cooked with bamboo shoots. It's a tribal delicacy served at festivals." }
        ],
        images: [
            "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200"
        ]
    },
    {
        id: 13,
        name: "Odisha",
        subtitle: "Temple City",
        lat: 20.9517,
        lng: 85.0985,
        description: "Ancient temples, pristine beaches, and exquisite handlooms. Odisha is India's best-kept secret for culture lovers!",
        history: "Odisha was Kalinga in ancient times. Emperor Ashoka's war here transformed him. The Jagannath cult, Odissi dance, and sand art originated here.",
        famous: [
            { name: "Jagannath Temple, Puri", lat: 19.8088, lng: 85.8314, img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80", desc: "One of Char Dham temples", history: "Built in 12th century, this temple has deity copies worldwide. Rath Yatra is world's largest religious procession." },
            { name: "Sun Temple, Konark", lat: 19.8876, lng: 86.0945, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "UNESCO sun chariot temple", history: "Built in 1250 AD by King Narasimhadeva I, this temple is shaped as a chariot with 12 wheels." },
            { name: "Lingaraj Temple, Bhubaneswar", lat: 20.2699, lng: 85.8449, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "1000-year-old temple", history: "Lingaraj means 'Lord of the world'. This 10th century temple is still active with daily pujas." },
            { name: "Puri Beach", lat: 19.7909, lng: 85.8256, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Golden sand beach with Sand Art", history: "Puri beach hosts International Sand Art Festival. Sudarshan Pattnaik is world-famous sand artist from here." }
        ],
        hidden: [
            { name: "Chilika Lake", lat: 19.6167, lng: 85.2833, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Asia's largest brackish water lake", history: "Chilika is Asia's largest lagoon. Irrawaddy dolphins are found here. Chilika's story is in epics." },
            { name: "Bhitarkanika", lat: 20.6500, lng: 86.8833, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Mangrove forest with crocodiles", history: "Second largest mangrove, Bhitarkanika has saltwater crocodiles. Crocodile breeding is successful here." },
            { name: "Gopalpur Beach", lat: 19.2631, lng: 84.8619, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Quiet beach with ruins", history: "Gopalpur was a port in ancient times. Buddhist ruins suggest it was a trade center." },
            { name: "Udayagiri Caves", lat: 20.4925, lng: 85.3283, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Buddhist caves with sculptures", history: "These 4th-6th century caves have Buddha sculptures. Jain Tirthankara figures are also here." }
        ],
        food: [
            { name: "Odia Thali", img: "https://images.unsplash.com/photo-1565399609451-7d1e942e8d14?w=600&q=80", desc: "Complete meal with rice and dal", history: "Odia cuisine is least oily in India. Rice, dal, bhaja, bharta, and chutney form traditional thali." },
            { name: "Rasgulla", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Spongy cottage cheese sweet", history: "Odisha claims Rasgulla originated here in 12th century Puri. It's lighter than Bengali version." },
            { name: "Pakhala Bhata", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", desc: "Fermented rice water with side dishes", history: "Summer staple, pakhala is fermented rice water. It's cooling and digestive. Each home has unique recipe." },
            { name: "Chhena Poda", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Baked cottage cheese dessert", history: "Odisha's famous sweet, chhena poda is baked cottage cheese with sugar. Known as Indian cheesecake." }
        ],
        images: [
            "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200"
        ]
    },
    {
        id: 14,
        name: "Jammu & Kashmir",
        subtitle: "Paradise on Earth",
        lat: 33.7782,
        lng: 76.5762,
        description: "Heaven on Earth with snow-capped mountains, pristine lakes, and lush gardens. A dream destination for every traveler!",
        history: "Kashmir was once a lake. Sage Kashyap drained it. It's been ruled by Mughals, Sikhs, and British. Article 370 was revoked in 2019.",
        famous: [
            { name: "Dal Lake, Srinagar", lat: 34.7832, lng: 74.8581, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Shikara rides on turquoise lake", history: "Dal is surrounded by Mughal gardens. The houseboats date to British era when Maharaja created them for tourists." },
            { name: "Gulmarg", lat: 34.0490, lng: 74.3836, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Premium ski resort", history: "Gulmarg means 'meadow of flowers'. It became ski destination when British introduced skiing in 1920s." },
            { name: "Pahalgam", lat: 34.0109, lng: 75.0026, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Valley of shepherds", history: "Pahalgam was Amarnath yatra base. Betaab Valley and Aru Valley are famous here. Cinematographer's paradise." },
            { name: "Leh Palace", lat: 34.1666, lng: 77.5848, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Tibetan royal palace", history: "Built in 17th century, this 9-story palace resembles Tibet's Potala Palace. The royal family still lives nearby." }
        ],
        hidden: [
            { name: "Sonmarg", lat: 34.2953, lng: 74.9442, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Golden meadow with rivers", history: "Sonmarg means 'meadow of gold'. It's base for treks to Zoji La pass. Thajiwas glacier is nearby." },
            { name: "Zanskar Valley", lat: 33.9089, lng: 76.8916, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Frozen river trek in winter", history: "Zanskar's Chadar Trek walks on frozen Zanskar river. This was only access in winter." },
            { name: "Nubra Valley", lat: 34.6333, lng: 77.6167, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Valley with double-humped camels", history: "Nubra produces Bactrian camels with two humps. Diskit monastery has 32m Buddha statue." },
            { name: "Pangong Tso", lat: 33.7167, lng: 78.7667, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "Blue lake at 14,000ft", history: "Famous from 3 Idiots movie, Pangong Tso is 70% in China. It's a high altitude lake at 4350m." }
        ],
        food: [
            { name: "Rogan Josh", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Spiced lamb curry", history: "Mughlai dish, rogan means 'bright red'. Kashmiri chilies give deep red color without much heat." },
            { name: "Yakhni", img: "https://images.unsplash.com/photo-1626645738196-c2a72c7eb30a?w=600&q=80", desc: "Yogurt-based meat curry", history: "Yakhni is cooked in yogurt gravy with whole spices. It's the base for many Kashmiri dishes." },
            { name: "Gushtaba", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", desc: "Minced meat balls in gravy", history: "Wazwan staple, gushtaba are large mutton balls in yogurt gravy. 21 dishes make a traditional wazwan." },
            { name: "Kahwa", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", desc: "Saffron-infused green tea", history: "Winter special, kahwa has saffron, almonds, and cardamom. It's offered to guests in Kashmiri households." }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
        ]
    },
    {
        id: 15,
        name: "Bihar",
        subtitle: "Ancient Heritage",
        lat: 25.0961,
        lng: 85.3131,
        description: "India's oldest civilization with ancient universities and Buddhist circuits. The land of Buddha and Mahavira awaits!",
        history: "Bihar is where Buddhism began. Buddha attained enlightenment here. Nalanda was world's first university. Mahavira, 24th Tirthankara, was born here.",
        famous: [
            { name: "Nalanda University", lat: 25.1353, lng: 85.4414, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "World's oldest university ruins", history: "Nalanda flourished 427-1197 AD. Emperor Kumarajiva taught here. Hiuen Tsang was famous student. Rebuilt as modern university." },
            { name: "Mahabodhi Temple, Bodh Gaya", lat: 24.8695, lng: 85.0074, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Where Buddha attained enlightenment", history: "In 528 BC, Siddhartha became Buddha under Bodhi tree. This is the most sacred Buddhist site." },
            { name: "Gurudwara Patna Sahib", lat: 25.6137, lng: 85.2365, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Guru Gobind Singh's birthplace", history: "Guru Gobind Singh, 10th Sikh Guru, was born here in 1666. This is one of 5 Takhts." },
            { name: "Patna Museum", lat: 25.6198, lng: 85.1348, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Ancient artifacts and art", history: "Known as 'Jadu Ghar', this museum has items from Indus Valley, Buddha's statues, and British-era collections." }
        ],
        hidden: [
            { name: "Vishwa Shanti Stupa", lat: 25.0139, lng: 85.4163, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "White Buddhist peace pagoda", history: "Built by Japanese Buddhist in 1969, this 125ft stupa has 4 statues of Buddha in different postures." },
            { name: "Jal Mandir, Pawapuri", lat: 25.3138, lng: 85.2897, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Temple in the middle of pond", history: "Mahavira attained nirvana here. The marble temple is in a pond, called Jal Mandir meaning water temple." },
            { name: "Naugaon", lat: 25.4200, lng: 85.5100, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Ancient Rajput kingdom", history: "Naugaon has 7th century temples. The ruins show it was once capital of ancient kingdoms." },
            { name: "Vikramshila", lat: 25.2647, lng: 87.0222, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Buddhist university ruins", history: "Founded in 8th century, Vikramshila had 100 temples. It was destroyed by Turkish invader in 13th century." }
        ],
        food: [
            { name: "Litti Chokha", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Wheat balls with spiced vegetables", history: "Litti was invented by Bhumihar community. Chokha is mashed potato/eggplant with spices." },
            { name: "Sattu Paratha", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Roasted chickpea flatbread", history: "Sattu is roasted gram flour. Paratha is stuffed with sattu, onion, and green chili. Energy food." },
            { name: "Chhena Ghugni", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Peas and cottage cheese curry", history: "Street food from Bihari vendors, ghugni uses dried peas and chhena. It's breakfast favorite." },
            { name: "Doodh Cola", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", desc: "Milk with bhelpuri", history: "Unique Bihari drink, doodh (milk) mixed with bhelpuri (snack). It's refreshing summer drink." }
        ],
        images: [
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
            "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200"
        ]
    },
    {
        id: 16,
        name: "Sikkim",
        subtitle: "The Last Shangri-La",
        lat: 27.5142,
        lng: 88.5886,
        description: "Untouched natural beauty with Buddhist monasteries, rhododendron blooms, and snow peaks. Northeast India's gem!",
        history: "Sikkim was a kingdom until 1975. The Namgyal dynasty ruled for 600 years. It became India's 22nd state in 1975. It's India's least populous state.",
        famous: [
            { name: "Tsong Lake", lat: 27.2333, lng: 88.6333, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Sacred glacial lake with views", history: "Tsong means 'Lake of the Mother'. Legend says a saint meditated here. Tibetan name is Khcheed." },
            { name: "Nathula Pass", lat: 27.3980, lng: 88.1396, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "India-China border at 14,000ft", history: "Nathula means 'listening ears'. It's one of few trading routes between India and China." },
            { name: "Rumtek Monastery", lat: 27.3639, lng: 88.5455, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Historic Buddhist monastery", history: "Built in 1960s, Rumtek is seat of Karmapa Lama. It's India's largest Buddhist monastery." },
            { name: "MG Road, Gangtok", lat: 27.3329, lng: 88.6143, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Shopping and food hub", history: "MG Road is main market. It's clean and pedestrian-friendly. Famous for local and Tibetan products." }
        ],
        hidden: [
            { name: "Zuluk", lat: 27.0333, lng: 88.8500, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Ancient silk route village", history: "Zuluk was on old silk route. The Zig-Zag road here is engineering marvel built by British." },
            { name: "Yuksam", lat: 27.6089, lng: 88.1378, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "First capital of Sikkim", history: "Yuksam was first capital in 1642. The first king Phuntsog Namgyal was crowned here." },
            { name: "Namchi", lat: 27.1679, lng: 88.3566, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Temples with Himalayan views", history: "Namchi has 108ft statue of Buddha. The Solophok monastery offers panoramic views." },
            { name: "Pelling", lat: 27.2829, lng: 88.2437, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Near Khangchendzonga", history: "Pelling is base for Khangchendzonga treks. The Pemayangtse monastery nearby is 300 years old." }
        ],
        food: [
            { name: "Momos", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Steamed dumplings", history: "Tibetan origin, momos became Sikkim's signature food. Every street has momo vendors." },
            { name: "Thukpa", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", desc: "Tibetan noodle soup", history: "Tibetan word meaning 'noodles in soup'. Thukpa has vegetables or meat with noodles." },
            { name: "Sha Phaley", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", desc: "Fried bread with meat", history: "Crispy outside, soft inside, sha phaley is stuffed with meat. Popular street food." },
            { name: "Sikkimese Tea", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", desc: "Organic Himalayan tea", history: "Sikkim became first organic state in 2016. Tea gardens at Temi produce premium organic tea." }
        ],
        images: [
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
        ]
    },
    {
        id: 17,
        name: "Himachal Pradesh",
        subtitle: "Dev Bhoomi",
        lat: 31.1048,
        lng: 77.1734,
        description: "Adventure capital of India with skiing, trekking, and mountain villages. Experience the Himalayas like never before!",
        history: "Himachal means 'snowy abode'. It was British summer capital. The Rajputs and Sikhs ruled here. Now it's adventure and honeymoon destination.",
        famous: [
            { name: "Shimla", lat: 31.1048, lng: 77.1734, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "British capital with toy train", history: "British made Shimla summer capital in 1864. The toy train (UNESCO) takes 5 hours from Kalka." },
            { name: "Manali", lat: 32.2399, lng: 77.1886, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Valley with Beas river", history: "Manali is derived from 'Manu Alaya' meaning 'home of Manu'. It's mentioned in Ramayana." },
            { name: "Dharamshala", lat: 32.2186, lng: 76.3230, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Home of the Dalai Lama", history: "Since 1960, Dalai Lama lives here in exile. Upper Dharamshala is called 'Little Lhasa'." },
            { name: "Kufri", lat: 31.0978, lng: 77.3069, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Hill station with skiing", history: "Kufri was British escape from summer heat. It has India's oldest skiing course." }
        ],
        hidden: [
            { name: "Spiti Valley", lat: 32.2667, lng: 78.0333, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Cold desert with monasteries", history: "Spiti means 'middle land'. Key monastery at Komic is world's highest village." },
            { name: "Kinnaur", lat: 31.5610, lng: 78.2464, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "Apple orchards and temples", history: "Kinnaur produces 20% of India's apples. Kinnauri apple is famous worldwide." },
            { name: "Chail", lat: 30.9667, lng: 77.2667, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Highest cricket ground", history: "Chail's cricket ground is at 2200m - highest in Asia. It was built by Maharaja of Patiala." },
            { name: "Tirthan Valley", lat: 31.7300, lng: 77.4500, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "Trout fishing and treks", history: "Tirthan has trout fishing. The Great Himalayan National Park is UNESCO site here." }
        ],
        food: [
            { name: "Himachali Dham", img: "https://images.unsplash.com/photo-1565399609451-7d1e942e8d14?w=600&q=80", desc: "Traditional feast with rajma", history: "Dham is served at festivals. It has rice, rajma, and dham (gram flour sweet). All vegetarian." },
            { name: "Momos", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Steamed Tibetan dumplings", history: "Tibetan refugees brought momos to Manali. Now every tourist spot has momo stalls." },
            { name: "Chana Madra", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Chickpea curry with yogurt", history: "Madra means yogurt-based. Chana madra uses chickpeas in yogurt gravy with spices." },
            { name: "Babru", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Black gram doughnuts", history: "Baba is black gram, ru means flour. This deep-fried snack is popular in Chamba." }
        ],
        images: [
            "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
            "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=1200"
        ]
    },
    {
        id: 18,
        name: "Uttar Pradesh",
        subtitle: "Land of Temples",
        lat: 27.2046,
        lng: 77.4977,
        description: "Home to the Taj Mahal and Varanasi - India's most iconic destinations. Experience spiritual India at its finest!",
        history: "UP is most populous state. Taj Mahal was built by Shah Jahan. Varanasi is world's oldest city. Buddha gave first sermon at Sarnath here.",
        famous: [
            { name: "Taj Mahal, Agra", lat: 27.1751, lng: 78.0421, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Symbol of love - UNESCO wonder", history: "Built 1632-1653 by 20,000 workers. Marble brought from 300km away. It changes color with light." },
            { name: "Varanasi Ghats", lat: 25.3176, lng: 82.9739, img: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800&q=80", desc: "Oldest living city with Ganga aarti", history: "Varanasi is 1200 years old. It's spiritual capital with 88 ghats. Ganga Aarti at Dashashwamedh is famous." },
            { name: "Agra Fort", lat: 27.1795, lng: 78.0211, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Red fort with marble work", history: "Akbar built this in 1565. Shah Jahan added marble pavilions. It's where Taj was planned." },
            { name: "Vrindavan", lat: 27.5766, lng: 77.6821, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Krishna's land with many temples", history: "Vrindavan is where Krishna spent childhood. Banke Bihari temple has special 'raslila' dance." }
        ],
        hidden: [
            { name: "Sarnath", lat: 25.3859, lng: 83.0226, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Where Buddha gave first sermon", history: "Buddha gave first sermon here in 528 BC. The Dhamek Stupa marks the spot. Deer park is also here." },
            { name: "Mathura", lat: 27.4928, lng: 77.6916, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Krishna's birthplace", history: "Krishna was born in Mathura's prison. The Janmabhoomi temple marks exact birthplace." },
            { name: "Ayodhya", lat: 26.8000, lng: 82.0333, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Lord Rama's birthplace", history: "Ram Janmabhoomi is being developed as temple complex. 2020 Supreme Court verdict gave disputed site to Hindus." },
            { name: "Lucknow", lat: 26.8467, lng: 80.9462, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "City of nawabs and chikankari", history: "Lucknow was Nawabi capital. Chikankari (embroidery) and Awadhi cuisine are famous heritage." }
        ],
        food: [
            { name: "Tandoori Chicken", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Clay oven roasted chicken", history: "Invented at Moti Mahal in Delhi, tandoori chicken was made famous worldwide from this region." },
            { name: "Petha", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Agra's famous white sweet", history: "Petha was invented in 17th century. It uses pumpkin and sugar. Taj Mahal shaped petha is famous." },
            { name: "Chaat", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Tangy street food", history: "Chaat means 'to lick'. Created in UP, it has dahi, papdi, chana, and chutneys." },
            { name: "Awadhi Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80", desc: "Fragrant Lucknowi biryani", history: "Awadhi cuisine uses 'dum' slow cooking. Kachchi biryani is sealed with dough." }
        ],
        images: [
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
            "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200"
        ]
    },
    {
        id: 19,
        name: "Andhra Pradesh",
        subtitle: "Rice Bowl of India",
        lat: 15.9129,
        lng: 79.7400,
        description: "Ancient temples, spicy cuisine, and beautiful beaches. The new state of Andhra Pradesh is a treasure trove!",
        history: "Andhra Pradesh was ruled by Satavahanas, Buddhist Vengi, and Mughals. It became separate state in 1953 and 2014 (after bifurcation).",
        famous: [
            { name: "Tirumala Temple", lat: 13.6796, lng: 79.3497, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", desc: "World's most visited temple", history: "Tirumala gets 50,000 pilgrims daily. The deity Venkateswara has 1000kg gold crown. Laddu prasad is famous." },
            { name: "Araku Valley", lat: 18.3252, lng: 82.8679, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Coffee plantations and tribal culture", history: "Araku coffee won Gold Medal in Paris. The valley has 20,000 tribal people with unique culture." },
            { name: "Visakhapatnam", lat: 17.6868, lng: 83.2185, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "City of destiny with beaches", history: "Vizag was British naval base. It's India's largest port. RK Beach and Ramakrishna Beach are famous." },
            { name: "Vijayawada", lat: 16.5062, lng: 80.6480, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc: "Buddhist circuit and MG Road", history: "Vijayawada means 'place of victory'. Kanaka Durga temple is famous. Undavalli caves are Buddhist." }
        ],
        hidden: [
            { name: "Lambasingi", lat: 18.1333, lng: 83.0333, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Kashmir of Andhra with waterfalls", history: "Lambasingi is called 'Kashmir of Andhra'. Winter temperatures drop to 2C. Kothapalli waterfalls are nearby." },
            { name: "Ananthagiri Hills", lat: 17.7333, lng: 82.9667, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Source of Godavari", history: "Ananthagiri is where Godavari originates. Ancient temple of Ananthasayana is here." },
            { name: "Horsley Hills", lat: 14.2667, lng: 78.4833, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc: "Hill station with eucalyptus", history: "Named after British collector HO Horsley, this hill has dense eucalyptus. Evening sun view is spectacular." },
            { name: "Nagarjuna Sagar", lat: 16.9333, lng: 79.3333, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "World's largest masonry dam", history: "Nagarjuna Sagar is world's largest reservoir built in 1967. It has Buddhist ruins of Nagarjunakonda." }
        ],
        food: [
            { name: "Gongura Chicken", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80", desc: "Sorrel leaves chicken curry", history: "Gongura is sorrel leaves unique to Andhra. The tangy taste makes it signature dish." },
            { name: "Pulihora", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Tamarind rice", history: "Pulihora is temple offering and festival food. Temple prasad uses tamarind for sourness." },
            { name: "Dosa", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80", desc: "Crispy crepe with fillings", history: "Andhra dosa is extra crispy with generous fillings. The masala has liberal potato stuffing." },
            { name: "Kheer", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Rice pudding with dry fruits", history: "Tirumala's kheer is famous. It's made with pure ghee and dry fruits. Special kheer is offered to deity." }
        ],
        images: [
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200"
        ]
    },
    {
        id: 20,
        name: "Chhattisgarh",
        subtitle: "Tribal Heartland",
        lat: 21.2787,
        lng: 81.8661,
        description: "Untouched waterfalls, ancient temples, and tribal culture. Central India's hidden gem is waiting to be explored!",
        history: "Chhattisgarh was part of ancient Kosala kingdom. It was ruled by Nala and Haitha dynasties. The state was formed in 2000 from Madhya Pradesh.",
        famous: [
            { name: "Chitrakoot Falls", lat: 21.9833, lng: 81.9333, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Horseshoe-shaped waterfall", history: "Chitrakoot means 'many-colored'. This 100ft fall is India's 7th largest. It's in Bastar tribal region." },
            { name: "Bhoramdeo Temple", lat: 21.8300, lng: 81.9200, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc: "Khajuraho of Chhattisgarh", history: "Built in 11th century, Bhoramdeo has erotic sculptures like Khajuraho. It's near Kanker royal palace." },
            { name: "Sirpur", lat: 21.7167, lng: 82.4333, img: "https://images.unsplash.com/photo-1596272888483-645ccd62b1a3?w=800&q=80", desc: "Ancient Buddhist ruins", history: "Sirpur was capital of South Kosala. Buddha visited here. The xuanzang Chinese traveler documented this." },
            { name: "Madhya Pradesh", lat: 21.2514, lng: 81.6296, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc: "Green city with temples", history: "Raipur is capital named after Raipur Singh. It's gateway to tribal Bastar and famous for handloom." }
        ],
        hidden: [
            { name: "Tirathgarh Falls", lat: 22.4833, lng: 83.9667, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", desc: "100ft waterfall in dense forest", history: "Tirathgarh has 7 streams called 'Saptadhara'. Water is believed to have healing properties." },
            { name: "Kanger Valley", lat: 19.7667, lng: 81.9500, img: "https://images.unsplash.com/photo-1548600928-4e98d8a7b8d7?w=800&q=80", desc: "National park with caves", history: "Kanger has limestone caves. The Buddhist caves here are older than Ajanta. 20 species of bats live here." },
            { name: "Barnawapara", lat: 21.4500, lng: 82.5500, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80", desc: "Wildlife sanctuary", history: "Barnawapara has tigers and leopards. Safari here is less crowded than other parks." },
            { name: "Achanakmar", lat: 22.6833, lng: 81.7333, img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", desc: "Tiger reserve with waterfalls", history: "Achanakmar has dense forests. The tiger reserve was created in 1996. It's inBilaspur region." }
        ],
        food: [
            { name: "Muthia", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", desc: "Steamed gram flour dumplings", history: "Muthia is popular in Chhattisgarh and Gujarat. It's made from fermented batter." },
            { name: "Bhajiya", img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&q=80", desc: "Fried gram flour snacks", history: "Bhajiya is monsoon favorite. Onion, potato, and chili are common varieties." },
            { name: "Dal Bafla", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", desc: "Baked bread in dal", history: "Similar to Rajasthani dal bati, dal bafla uses round baked breads in dal with ghee." },
            { name: "Khopra", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", desc: "Sweet with coconut", history: "Khopra is made from shredded coconut and jaggery. It's traditional sweet during festivals." }
        ],
        images: [
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
        ]
    }
];

// Rest of the JavaScript code remains the same
// Distance matrix, functions for map, routes, reviews, etc.
const distanceMatrix = {
    "1-2": 2100, "1-3": 1400, "1-4": 500, "1-5": 2200, "1-6": 1200,
    "2-3": 850, "2-4": 2800, "2-5": 700, "2-6": 1500,
    "3-4": 2200, "3-5": 1200, "3-6": 600,
    "4-5": 2500, "4-6": 1700,
    "5-6": 1400, "5-7": 1800,
    "6-7": 900, "6-8": 2200,
    "7-8": 2100, "7-9": 1100,
    "8-9": 1800, "8-10": 2000,
    "9-10": 3800, "9-11": 1300,
    "10-11": 1500, "10-12": 3500,
    "11-12": 2500, "11-13": 1200,
    "12-13": 1400, "12-14": 2800,
    "13-14": 2500, "13-15": 600,
    "14-15": 2000, "14-16": 600,
    "15-16": 1200, "15-17": 1800,
    "16-17": 800, "16-18": 1500,
    "17-18": 400, "17-19": 2500,
    "18-19": 1000, "18-20": 1200,
    "19-20": 800
};

function getDistance(id1, id2) {
    if (id1 === id2) return 0;
    const key = Math.min(id1, id2) + "-" + Math.max(id1, id2);
    return distanceMatrix[key] || 1500;
}

function getTravelTime(distance) {
    const avgSpeed = 60;
    const hours = distance / avgSpeed;
    if (hours < 1) return Math.round(hours * 60) + " min";
    return hours.toFixed(1) + " hrs";
}

function getTravelCost(distance) {
    return distance * 12;
}

let map, markers = [];

function initMap() {
    map = L.map('destination-map').setView([22.5, 82.0], 5);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    
    destinations.forEach(dest => {
        const marker = L.marker([dest.lat, dest.lng]).addTo(map);
        marker.bindPopup(`<div class="popup-content"><h4>${dest.name}</h4><p>${dest.subtitle}</p></div>`);
        marker.on('click', () => showDestinationDetails(dest.id));
    });
}

function showDestinationDetails(id) {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;
    
    const grid = document.getElementById('destinations-grid');
    grid.innerHTML = '';
    
    const section = document.createElement('div');
    section.className = 'destination-detail';
    section.innerHTML = `
        <div class="detail-header">
            <h2>${dest.name}</h2>
            <p class="subtitle">${dest.subtitle}</p>
            <p class="history"><strong>Behind the Story:</strong> ${dest.history}</p>
            <p>${dest.description}</p>
        </div>
        
        <div class="detail-section">
            <h3><i class="fas fa-star"></i> Famous Places</h3>
            <div class="places-grid">
                ${dest.famous.map(place => `
                    <div class="place-card" onclick="showPlaceMap(${place.lat}, ${place.lng}, '${place.name}')">
                        <img src="${place.img}" alt="${place.name}">
                        <div class="place-info">
                            <h4>${place.name}</h4>
                            <p class="place-desc">${place.desc}</p>
                            <p class="place-history"><strong>History:</strong> ${place.history}</p>
                            <span class="view-map"><i class="fas fa-map-marker-alt"></i> View on Map</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="detail-section">
            <h3><i class="fas fa-gem"></i> Hidden Gems</h3>
            <div class="places-grid">
                ${dest.hidden.map(place => `
                    <div class="place-card" onclick="showPlaceMap(${place.lat}, ${place.lng}, '${place.name}')">
                        <img src="${place.img}" alt="${place.name}">
                        <div class="place-info">
                            <h4>${place.name}</h4>
                            <p class="place-desc">${place.desc}</p>
                            <p class="place-history"><strong>History:</strong> ${place.history}</p>
                            <span class="view-map"><i class="fas fa-map-marker-alt"></i> View on Map</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="detail-section">
            <h3><i class="fas fa-utensils"></i> Local Food to Try</h3>
            <div class="places-grid">
                ${dest.food.map(item => `
                    <div class="place-card food-card">
                        <img src="${item.img}" alt="${item.name}">
                        <div class="place-info">
                            <h4>${item.name}</h4>
                            <p>${item.desc}</p>
                            <p class="place-history"><strong>Story:</strong> ${item.history}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    grid.appendChild(section);
    section.scrollIntoView({ behavior: 'smooth' });
}

function showPlaceMap(lat, lng, name) {
    map.setView([lat, lng], 14);
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    const marker = L.marker([lat, lng]).addTo(map);
    markers.push(marker);
    marker.bindPopup(`<div class="popup-content"><h4>${name}</h4><p>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}</p></div>`).openPopup();
}

function renderDestinations(filter = 'all') {
    const grid = document.getElementById('destinations-grid');
    if (!grid) return;
    
    let filteredDestinations = destinations;
    
    if (filter !== 'all') {
        filteredDestinations = destinations.filter(dest => {
            if (filter === 'north' || filter === 'south' || filter === 'east' || filter === 'west') {
                return dest.region === filter;
            }
            return dest.type && dest.type.includes(filter);
        });
    }
    
    grid.innerHTML = filteredDestinations.map(dest => `
        <div class="destination-card" data-id="${dest.id}" onclick="showDestinationDetails(${dest.id})">
            <div class="destination-image">
                <img src="${dest.images[0]}" alt="${dest.name}">
                <div class="destination-tags">
                    <span class="budget-tag">${dest.budget || 'Budget Friendly'}</span>
                    <span class="season-tag">${dest.season || 'Oct-Mar'}</span>
                </div>
            </div>
            <div class="destination-content">
                <h3>${dest.name}</h3>
                <p class="destination-subtitle">${dest.subtitle}</p>
                <p class="destination-desc">${dest.description.substring(0, 80)}...</p>
                <div class="place-counts">
                    <span><i class="fas fa-star"></i> ${dest.famous.length} Places</span>
                    <span><i class="fas fa-gem"></i> ${dest.hidden.length} Hidden</span>
                    <span><i class="fas fa-utensils"></i> ${dest.food.length} Foods</span>
                </div>
                <button class="btn-explore">Explore <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `).join('');
    
    if (filteredDestinations.length === 0) {
        grid.innerHTML = '<p class="no-results">No destinations found for this filter.</p>';
    }
}

function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            renderDestinations(filter);
        });
    });
}

function renderRoutes() {
    const routeList = document.getElementById('route-list');
    if (!routeList) return;
    const popularRoutes = [
        { from: 1, to: 3, name: "Rajasthan to Goa" },
        { from: 2, to: 3, name: "Kerala to Goa" },
        { from: 14, to: 16, name: "Kashmir to Sikkim" },
        { from: 5, to: 2, name: "Tamil Nadu to Kerala" },
        { from: 1, to: 14, name: "Rajasthan to Kashmir" }
    ];
    routeList.innerHTML = popularRoutes.map(route => {
        const dist = getDistance(route.from, route.to);
        const time = getTravelTime(dist);
        return `<div class="route-item" data-from="${route.from}" data-to="${route.to}">
            <h4>${route.name}</h4>
            <div class="route-details">
                <span class="distance"><i class="fas fa-road"></i> ${dist} km</span>
                <span class="time"><i class="fas fa-clock"></i> ${time}</span>
            </div>
        </div>`;
    }).join('');
    document.querySelectorAll('.route-item').forEach(item => {
        item.addEventListener('click', () => {
            const fromId = parseInt(item.dataset.from);
            const toId = parseInt(item.dataset.to);
            const fromDest = destinations.find(d => d.id === fromId);
            const toDest = destinations.find(d => d.id === toId);
            map.setView([(fromDest.lat + toDest.lat)/2, (fromDest.lng + toDest.lng)/2], 6);
        });
    });
}

function initDistanceCalculator() {
    const fromSelect = document.getElementById('from-destination');
    const toSelect = document.getElementById('to-destination');
    const reviewDestSelect = document.getElementById('review-destination');
    destinations.forEach(dest => {
        fromSelect.innerHTML += `<option value="${dest.id}">${dest.name}</option>`;
        toSelect.innerHTML += `<option value="${dest.id}">${dest.name}</option>`;
        reviewDestSelect.innerHTML += `<option value="${dest.name}">${dest.name}</option>`;
    });
    fromSelect.addEventListener('change', calculateRoute);
    toSelect.addEventListener('change', calculateRoute);
}

function calculateRoute() {
    const fromId = parseInt(document.getElementById('from-destination').value);
    const toId = parseInt(document.getElementById('to-destination').value);
    const resultDiv = document.getElementById('calc-result');
    if (!fromId || !toId || fromId === toId) {
        resultDiv.style.display = 'none';
        return;
    }
    const distance = getDistance(fromId, toId);
    const time = getTravelTime(distance);
    const cost = getTravelCost(distance);
    document.getElementById('calc-distance').textContent = distance;
    document.getElementById('calc-time').textContent = time;
    document.getElementById('calc-cost').textContent = 'Rs ' + cost.toLocaleString();
    resultDiv.style.display = 'block';
}

const defaultReviews = [
    { id: 1, name: "Rahul Sharma", location: "Mumbai", destination: "Rajasthan", rating: 5, text: "Absolutely magical! The palaces took my breath away. The royal heritage is incredible!", date: "2026-01-15" },
    { id: 2, name: "Priya Patel", location: "Bangalore", destination: "Kerala", rating: 5, text: "Houseboat experience was once in a lifetime! Peaceful backwaters are amazing.", date: "2026-02-10" },
    { id: 3, name: "Amit Kumar", location: "Delhi", destination: "Goa", rating: 5, text: "Best beach vacation ever! Clean beaches and vibrant nightlife.", date: "2026-01-08" },
    { id: 4, name: "Sneha Gupta", location: "Chennai", destination: "Uttarakhand", rating: 5, text: "Valley of Flowers was dreamlike! Nature at its best.", date: "2026-03-05" }
];

// Load reviews from localStorage or use default reviews
let reviews = JSON.parse(localStorage.getItem('deshDarshanReviews')) || [...defaultReviews];

// Save reviews to localStorage
function saveReviews() {
    localStorage.setItem('deshDarshanReviews', JSON.stringify(reviews));
}

function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;
    
    grid.innerHTML = reviews.map(review => `
        <div class="review-card" data-aos="fade-up">
            <div class="review-header">
                <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                <div class="reviewer-info">
                    <h4>${review.name}</h4>
                    <span class="location"><i class="fas fa-map-marker-alt"></i> ${review.location}</span>
                </div>
            </div>
            <div class="review-rating">${'<i class="fas fa-star"></i>'.repeat(review.rating)}</div>
            <p class="review-text">"${review.text}"</p>
            <span class="review-destination">${review.destination}</span>
        </div>
    `).join('');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    const newReview = {
        id: Date.now(),
        name: document.getElementById('reviewer-name').value,
        location: document.getElementById('reviewer-location').value,
        destination: document.getElementById('review-destination').value,
        rating: parseInt(document.getElementById('review-rating').value),
        text: document.getElementById('review-text').value,
        date: new Date().toISOString().split('T')[0]
    };
    
    reviews.unshift(newReview);
    saveReviews();
    renderReviews();
    document.getElementById('add-review-form').reset();
    alert('Thank you for your review!');
}

document.addEventListener('DOMContentLoaded', function() {
    initMap();
    renderDestinations();
    initFilterButtons();
    renderRoutes();
    initDistanceCalculator();
    renderReviews();
    document.getElementById('add-review-form').addEventListener('submit', handleReviewSubmit);
});
