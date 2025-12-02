

// Project data

const collabs = [
    {
        title: "Junction 2025 WithSecure challenger",
        link: "https://github.com/NNLisk/Junction-2025",
        image: "resources/Tumudemo.png",
        description: "We decided to work on a solution for WithSecure's challenge: To provide a security information tool for a company's information security team to assess and validate the software used by company developers fast and reliably",
        myRole: "Lead backend developer",
        Architecture: "Rust backend + vanilla JS frontend with tauri framework"
    },
    {
        title: "Automatic licence plate recognition system",
        link: "https://github.com/NNLisk/Automatic-plate-recognition-system",
        image: "resources/OCR.png",
        description: "A self built convolutional neural network for OCR and YOLO plate detection. Can be used in multiple traffic related issues",
        myRole: "Image processing, and Machine learning architecture and training",
        Architecture: "Pytorch frame for CNN and YOLOv8 for plate detection, language: python"
    }
];
const projects = [
    {
        title: "ESP32 network sniffer",
        link: "https://github.com/NNLisk/Wi-fi-sniffer",
        image: "resources/snifferPFP.png",
        description: "A sniffer that periodically captures unfiltered network packets using an Espressif ESP32 microcontroller. Attemt at solving identification past MAC address randomization",
        tags: [
            { text: "C", type: "language" },
            { text: "IoT", type: "type" },
            { text: "Computer Networking", type: "type"}
        ]
    },
    {
        title: "Database Connection Pool Manager",
        link: "https://github.com/NNLisk/manualConnectionPool",
        image: "resources/Database.png",
        description: "singleton database connection pool manager for JDCB. Improves efficiency by avoid the recreaion of connections.",
        tags: [
            { text: "Java", type: "language" },
            { text: "Utility", type: "type" }
        ]
    },
    {
        title: "Asynchronous web-server in Rust",
        link: "https://github.com/NNLisk/Rust-http-server",
        image: "resources/RustServer.png",
        description: "Hosting this web server asynchronously with Rust, handles 8000+ connections simultaneously",
        tags: [
            { text: "Rust", type: "language" },
            { text: "web-server", type: "type"},
        ]
    },
    {
        title: "Custom Messaging Protocol",
        link: "https://github.com/NNLisk/MessagingApp",
        image: "resources/messaging.png",
        description: "Client-server real-time messaging over TCP.",
        tags: [
            { text: "C#", type: "language" },
            { text: "Network protocols", type: "type" }
        ]
    },
    {
        title: "Interactable database with GUI",
        link: "https://github.com/NNLisk/databaseProject/",
        image: "resources/databaseProj.png",
        description: "Interactive and efficient database for searching and updating song information",
        tags: [
            { text: "Java", type: "language" },
            { text: "SQL", type: "language" },
            { text: "PostgreSQL", type: "type" },
            { text: "UI", type: "type" }
        ]
    },
    {
        title: "Diffie-Hellman cryptography",
        link: "https://github.com/NNLisk/DHKeyExchange",
        image: "resources/dhkey.png",
        description: "Simple implementation of the Diffie-Hellman cryptography",
        tags: [
            { text: "C#", type: "language" },
            { text: "Cryptography", type: "type" }
        ]
    },
    {
        title: "OpenCV image processing material",
        link: "https://github.com/NNLisk/Opencv-materials",
        image: "resources/Opencv3.png",
        description: "Reference material for learning image processing with OpenCV",
        tags: [
            { text: "Python", type: "language" },
            { text: "OpenCV", type: "type" },
            { text: "Image Processing", type: "type"}
        ]
    },
    {
        title: "Discord Bot",
        link: "https://github.com/yourusername/Gandalf",
        image: "https://via.placeholder.com/400x300/FF9800/ffffff?text=Project+5",
        description: "Solid base architecture for creating a discord bot, listens and detects commands and joins voice channels",
        tags: [
            { text: "Java", type: "language" },
            { text: "Bot", type: "type" },
            { text: "Server", type: "type" }
        ]
    }
];

function init() {
    createDropdown();
    renderProjects();
}

function createDropdown() {
    const filtersDiv = document.getElementById('filters');
    const select = document.createElement('select');
    select.classList.add("dropdown");
    select.id = 'sectionFilter';
    
    const options = [
        { value: 'projects', label: 'Projects' },
        { value: 'official', label: 'Official Work' }
    ];
    
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        select.appendChild(option);
    });
    
    select.addEventListener('change', (e) => {
        hideall();
        switch(e.target.value) {
        case 'projects': showProjects(); break;
        case 'official': showCollabs(); break;
        }
    });
    
    filtersDiv.appendChild(select);
    }

// Render projects
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const tagsHTML = project.tags.map(tag => 
            `<span class="tag ${tag.type}">${tag.text}</span>`
        ).join('');
        
        card.innerHTML = `
            <a href="${project.link}" target="_blank" class="project-card-link">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </a>
            `;
        
        grid.appendChild(card);
    });
}

function renderCollaborations() {
    const grid = document.getElementById("projectsGrid");

    collabs.forEach(collab => {
        const card = document.createElement("div");
        card.className = "collab-card";

        card.innerHTML = `
            <a href="${collab.link}" target="_blank" class="collab-card-link">
                <img src="${collab.image}" alt="${collab.title}" class="collab-image">
                <div class="collab-content">
                    <h3 class="collab-title">${collab.title}</h3>
                    <p class="collab-myrole">My role: ${collab.myRole}</p>
                    <p class="collab-architecture">Tech stack: ${collab.Architecture}</p>
                    <p class="collab-description">${collab.description}</p>  
                </div>
            </a>
            `;
        grid.appendChild(card);
    });
}


function hideall() {
    document.getElementById("projectsGrid").innerHTML = "";
}

function showInterests() {
    renderInterests();
}

function showCollabs() {
    renderCollaborations();
}

function showProjects() {
    renderProjects();
}

init();

        