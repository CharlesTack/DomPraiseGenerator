function techPhrases() {
    var phrases1 = ["AI-Assisted","AI-Augmented", "AI-Enhanced", "AI-Powered", "AI-Driven", "AI-Enabled", "AI-Integrated", "AI-Infused", "AI-Optimized", "AI-Transformed"];
    var phrases2 = ["Data-Driven", "Data-Enabled", "Data-Enhanced", "Data-Integrated", "Data-Infused", "Data-Optimized", "Data-Powered", "Data-Transformed"];
    var phrases3 = ["Machine Learning", "Deep Learning", "Neural Networks", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Semi-Supervised Learning"];
    var phrases4 = ["Big Data", "Data Science", "Data Engineering", "Data Analytics", "Data Mining", "Data Warehousing", "Data Visualization", "Data Management", "Data Governance", "Data Quality"];
    var phrases5 = ["Cloud Computing", "Edge Computing", "Fog Computing", "Distributed Computing", "Grid Computing", "Quantum Computing", "Serverless Computing", "High-Performance Computing", "Parallel Computing", "Supercomputing"];
    var phrases6 = ["Cybersecurity", "Information Security", "Network Security", "Application Security", "Cloud Security", "Data Security", "Endpoint Security", "Identity and Access Management", "Security Operations", "Security Architecture"];
    var phrases7 = ["Internet of Things", "Industrial Internet of Things", "Internet of Everything", "Internet of Medical Things", "Internet of Vehicles", "Internet of Energy", "Internet of Agriculture", "Internet of Retail", "Internet of Homes", "Internet of Cities"];
    var phrases8 = ["agile", "collaborative", "consulatative", "customer-centric", "data-driven", "disruptive innovation", "dynamic", "end-to-end", "enterprise-wide", "global", "holistic", "innovative", "integrated", "interdisciplinary", "multidisciplinary", "omnichannel", "scalable", "seamless", "sustainable", "synergistic", "tailored", "value-added", "visionary"];
    var phrases9 = ["approach", "architecture", "solution", "framework", "partnership", "methodology", "model", "platform", "solutions", "strategy", "workflow"];
    
    var random1 = Math.floor(Math.random() * phrases1.length);
    var random2 = Math.floor(Math.random() * phrases2.length);
    var random3 = Math.floor(Math.random() * phrases3.length);
    var random4 = Math.floor(Math.random() * phrases4.length);
    var random5 = Math.floor(Math.random() * phrases5.length);
    var random6 = Math.floor(Math.random() * phrases6.length);
    var random7 = Math.floor(Math.random() * phrases7.length);
    var random8 = Math.floor(Math.random() * phrases8.length);
    var random9 = Math.floor(Math.random() * phrases9.length);

    var phrase = phrases1[random1] + " " + phrases2[random2] + " " + phrases3[random3] + " " + phrases4[random4] + " " + phrases5[random5] + " " + phrases6[random6] + " " + phrases7[random7] + " " + phrases8[random8] + " " + phrases9[random9];
    return phrase;
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('button');
    var jargonDiv = document.getElementById('jargon');
    var jargonText = document.getElementById('jargon-text');
    button.addEventListener('click', function() {
        var phrase = techPhrases();
        jargonText.textContent = phrase; // Insert the generated phrase into the speech bubble
    });
});