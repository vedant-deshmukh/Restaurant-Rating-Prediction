function addOptions()
{
    // Adding Restaurant Types
    const restTypes = [ 'Lounge', 'Kiosk', 'Food Truck', 'Irani Cafee',
                        'Confectionery', 'Cafe', 'Microbrewery', 'Dhaba', 'Takeaway', 'Pop Up',
                        'Pub', 'Bar', 'Delivery', 'Meat Shop', 'Beverage Shop', 'Dessert Parlor',
                        'Club', 'Quick Bites', 'Bhojanalya', 'Casual Dining', 'Fine Dining', 'Mess',
                        'Sweet Shop', 'Food Court', 'Bakery'];

    let dropdown = document.getElementById("RT");

    for(let i = 0; i < restTypes.length; i++)
    {
        dropdown.options[dropdown.options.length] = new Option(restTypes[i], restTypes[i]);
    }


    // Adding Cuisines
    const cuisines = [ "Rajasthani", "Mediterranean", "Desserts", "Burmese",
                        "Tibetan", "Belgian", "Seafood", "Raw Meats", "Greek", "African", "Russian",
                        "Italian", "Grill", "Korean", "Ice Cream", "Coffee", "Spanish", "Nepalese",
                        "Afghani", "Momos", "Bar Food", "South American", "Middle Eastern", "Malaysian",
                        "Salad", "Bubble Tea", "German", "Bohri", "Asian", "Hyderabadi", "Tamil", "Turkish",
                        "Arabian", "Sushi", "Awadhi", "Kerala", "Bengali", "Afghan", "Andhra", "Konkan",
                        "Indonesian", "Street Food", "Goan", "Chinese", "BBQ", "Wraps", "Continental", 
                        "Lucknowi", "Bihari", "Sandwich", "Cantonese", "Paan", "Charcoal Chicken", "Iranian",
                        "Portuguese", "Parsi", "Lebanese", "Sindhi", "Naga", "Rolls", "Mithai", "Hot dogs",
                        "Finger Food", "Thai", "Burger", "Juices", "Healthy Food", "Roast Chicken", "Pan Asian",
                        "Assamese", "Vegan", "Tex-Mex", "Vietnamese", "Mughlai", "Gujarati", "Modern Indian",
                        "Steak", "Mongolian", "American", "North Eastern", "Jewish", "North Indian", "European",
                        "French", "Japanese", "Drinks Only", "Tea", "South Indian", "Indian", "Australian", 
                        "Malwani", "Fast Food", "Beverages", "Kebab", "Kashmiri", "Sri Lankan", "Oriya", 
                        "Mangalorean", "Singaporean", "Maharashtrian", "Mexican", "British", "Pizza", "Biryani",
                        "Chettinad"];

    dropdown = document.getElementById("C");

    for(let i = 0; i < cuisines.length; i++)
    {
        dropdown.options[dropdown.options.length] = new Option(cuisines[i], cuisines[i]);
    }


    // Adding Locations
    const locations = ['BTM', 'Banashankari', 'Banaswadi', 'Bannerghatta Road', 'Basavanagudi',
                        'Basaveshwara Nagar', 'Bellandur', 'Bommanahalli', 'Brigade Road',
                        'Brookefield', 'CV Raman Nagar', 'Central Bangalore', 'Church Street',
                        'City Market', 'Commercial Street', 'Cunningham Road', 'Domlur',
                        'East Bangalore', 'Ejipura', 'Electronic City', 'Frazer Town',
                        'HBR Layout', 'HSR', 'Hebbal', 'Hennur', 'Hosur Road',
                        'ITPL Main Road, Whitefield', 'Indiranagar', 'Infantry Road',
                        'JP Nagar', 'Jakkur', 'Jalahalli', 'Jayanagar', 'Jeevan Bhima Nagar',
                        'KR Puram', 'Kaggadasapura', 'Kalyan Nagar', 'Kammanahalli',
                        'Kanakapura Road', 'Kengeri', 'Koramangala', 'Koramangala 1st Block',
                        'Koramangala 2nd Block', 'Koramangala 3rd Block',
                        'Koramangala 4th Block', 'Koramangala 5th Block',
                        'Koramangala 6th Block', 'Koramangala 7th Block',
                        'Koramangala 8th Block', 'Kumaraswamy Layout', 'Langford Town',
                        'Lavelle Road', 'MG Road', 'Magadi Road', 'Majestic', 'Malleshwaram',
                        'Marathahalli', 'Mysore Road', 'Nagarbhavi', 'Nagawara', 'New BEL Road',
                        'North Bangalore', 'Old Airport Road', 'Old Madras Road', 'Peenya',
                        'RT Nagar', 'Race Course Road', 'Rajajinagar', 'Rajarajeshwari Nagar',
                        'Rammurthy Nagar', 'Residency Road', 'Richmond Road', 'Sadashiv Nagar',
                        'Sahakara Nagar', 'Sanjay Nagar', 'Sankey Road', 'Sarjapur Road',
                        'Seshadripuram', 'Shanti Nagar', 'Shivajinagar', 'South Bangalore',
                        'St. Marks Road', 'Thippasandra', 'Ulsoor', 'Uttarahalli',
                        'Varthur Main Road, Whitefield', 'Vasanth Nagar', 'Vijay Nagar',
                        'West Bangalore', 'Whitefield', 'Wilson Garden', 'Yelahanka',
                        'Yeshwantpur'];

    dropdown = document.getElementById("L");

    for(let i = 0; i < locations.length; i++)
    {
        dropdown.options[dropdown.options.length] = new Option(locations[i], locations[i]);
    }
}

