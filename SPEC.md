# DeshDarshan – Smart Indian Travel Planner Website

## 1. Project Overview

- **Project Name:** DeshDarshan
- **Type:** Multi-page static website
- **Core Functionality:** Showcase Indian destinations, culture, accommodations, and provide trip planning calculator
- **Target Users:** Domestic and international travelers interested in exploring India

---

## 2. UI/UX Specification

### Color Palette

| Role | Color | Hex Code |
|------|-------|----------|
| Primary (Saffron) | Deep Orange | `#FF6B35` |
| Secondary (Green) | Forest Green | `#1B4D3E` |
| Accent (Gold) | Antique Gold | `#D4AF37` |
| Background | Warm White | `#FFFAF5` |
| Dark Background | Rich Charcoal | `#1A1A2E` |
| Text Primary | Dark Brown | `#2D2D2D` |
| Text Light | Off White | `#F5F5F5` |

### Typography

- **Headings:** "Playfair Display" (serif) - elegant, traditional feel
- **Body:** "Poppins" (sans-serif) - clean, modern readability
- **Accent Text:** "Tiro Devanagari Hindi" for any Hindi text display

### Font Sizes

- H1: 3.5rem (hero titles)
- H2: 2.5rem (section titles)
- H3: 1.5rem (card titles)
- Body: 1rem
- Small: 0.875rem

### Spacing System

- Section padding: 80px vertical, 5% horizontal
- Card padding: 24px
- Grid gap: 24px
- Border radius: 12px (cards), 8px (buttons), 50% (avatars)

### Visual Effects

- Card hover: translateY(-8px) with box-shadow increase
- Button hover: brightness increase + slight scale
- Page transitions: fade-in on load (0.5s)
- Gradient overlays on hero images: linear-gradient(135deg, rgba(27,77,62,0.8), rgba(255,107,53,0.6))

---

## 3. Layout Structure

### Global Navigation Bar

- Fixed position at top
- Logo (text-based): "DeshDarshan" with decorative border
- Nav links: Home | Destinations | Accommodation | Culture | Trip Planner
- Mobile: Hamburger menu with slide-in drawer
- Active page indicator: gold underline

### Footer (All Pages)

- Three columns: About, Quick Links, Contact
- Social media icons
- Copyright notice
- Decorative mandala pattern border on top

---

## 4. Page Specifications

### 4.1 Homepage (index.html)

#### Hero Section
- Full viewport height (100vh)
- Background: High-quality image of Indian landscape/monument (placeholder: gradient fallback)
- Overlay with tagline: "Discover the Magic of Incredible India"
- CTA buttons: "Explore Destinations" (primary), "Plan Your Trip" (secondary)

#### Features Section (3 cards)
- Card 1: "Explore Destinations" - 30+ states/regions
- Card 2: "Find Accommodation" - Hotels, resorts, homestays
- Card 3: "Plan Your Budget" - Trip cost calculator

#### About Section
- Brief description of DeshDarshan platform
- Mission statement
- External link to Incredible India (tourism.gov.in)

#### Statistics Bar
- Number of destinations covered
- Accommodation options
- Cultural experiences

### 4.2 Destinations Page (destinations.html)

#### Header
- Title: "Explore India's Treasures"
- Subtitle: "From the Himalayas to the backwaters"

#### Destinations Grid
- 15 major Indian states/regions in card format
- Each card contains:
  - State/Region name with flag emoji
  - Image placeholder (colored gradient based on region)
  - Famous places (list)
  - Hidden gems (list)
  - Local food (list)
  - Cultural highlight

#### States to Include
1. Rajasthan - Land of Kings
2. Kerala - God's Own Country
3. Goa - Beach Paradise
4. Uttarakhand - Dev Bhoomi
5. Tamil Nadu - Temple Land
6. Maharashtra - Financial Capital
7. Gujarat - Vibrant Heritage
8. West Bengal - Cultural Hub
9. Punjab - Granary of India
10. Karnataka - Silicon Valley of India
11. Madhya Pradesh - Heart of India
12. Assam - Tea Garden Paradise
13. Odisha - Temple City
14. Jammu & Kashmir - Paradise on Earth
15. Bihar - Ancient Heritage

### 4.3 Accommodation Page (accommodation.html)

#### Search Section
- Large search input with magnifying glass icon
- Placeholder: "Search for a city or destination..."
- Search button with hover effect

#### Filter Options (horizontal pills)
- All | Budget | Mid-range | Luxury

#### Results Section
- Dynamic card grid showing accommodation options
- Each card shows:
  - Property name
  - Location
  - Price range indicator (₹ symbols)
  - Type badge (Hotel/Resort/Homestay)
  - Rating stars
  - Key amenities icons

#### Pre-loaded Data
- 12 sample accommodations across 6 cities
- Categories: Budget (₹), Mid (₹₹), Luxury (₹₹₹)

### 4.4 Culture Page (culture.html)

#### Hero Banner
- Title: "Soul of India"
- Subtitle celebrating diversity

#### Sections (scrollable with smooth scroll)
1. **Festivals of India**
   - Diwali, Holi, Eid, Christmas, Pongal, Baisakhi
   - Cards with festival name, description, image placeholder

2. **Classical Dance Forms**
   - Bharatanatyam, Kathak, Odissi, Kuchipudi, Mohiniyattam
   - Each with origin state, description

3. **Cuisines by Region**
   - North: Butter Chicken, Biryani
   - South: Dosa, Idli, Sambar
   - East: Rasgulla, Macher Jhol
   - West: Dhokla, Pav Bhaji
   - Northeast: Momos, Thukpa

4. **Traditional Arts & Crafts**
   - Madhubani, Warli, Kalamkari, Bandhani
   - Block printing, pottery

### 4.5 Trip Planner Page (tripplanner.html)

#### Calculator Section
- Clean, centered card design
- Input fields:
  - Number of Days (number input, min 1)
  - Hotel Cost per Day (₹ input)
  - Food Cost per Day (₹ input)
  - Travel/Transport Cost (₹ input)
- "Calculate" button
- "Reset" button

#### Results Display
- Breakdown section showing:
  - Accommodation total
  - Food total
  - Travel cost
  - **Total Estimated Budget** (highlighted)
- Animated number reveal on calculation

#### Tips Section
- Budget travel tips for India
- Money-saving suggestions

---

## 5. Functionality Specification

### JavaScript Features

1. **Accommodation Search**
   - Real-time filtering as user types
   - Case-insensitive matching
   - Filter by price category
   - No page reload required

2. **Trip Cost Calculator**
   - Formula: `(days × hotelCost) + (days × foodCost) + travelCost`
   - Input validation (positive numbers only)
   - Formatted currency display (INR with commas)
   - Clear breakdown display

3. **Navigation**
   - Smooth scroll for anchor links
   - Active page highlighting

4. **UI Interactions**
   - Card hover effects
   - Mobile menu toggle
   - Form validation feedback

---

## 6. File Structure

```
/web dev/
├── index.html
├── destinations.html
├── accommodation.html
├── culture.html
├── tripplanner.html
├── css/
│   ├── styles.css (main styles)
│   └── responsive.css (media queries)
└── js/
    ├── main.js (shared functionality)
    ├── accommodation.js (search/filter)
    └── tripplanner.js (calculator)
```

---

## 7. Acceptance Criteria

- [ ] All 5 pages load without errors
- [ ] Navigation works between all pages
- [ ] Indian color palette consistently applied
- [ ] Typography follows spec (Playfair Display + Poppins)
- [ ] Homepage hero displays with CTA buttons
- [ ] Destinations page shows 15 state cards
- [ ] Accommodation search filters results in real-time
- [ ] Trip planner calculates correct totals
- [ ] Responsive design works on mobile/tablet
- [ ] All external links open in new tab
- [ ] Footer appears on all pages
- [ ] No console errors on any page

---

## 8. External Resources

- Google Fonts: Playfair Display, Poppins, Tiro Devanagari Hindi
- Font Awesome 6 (for icons)
- External link: https://tourism.gov.in (Incredible India)
