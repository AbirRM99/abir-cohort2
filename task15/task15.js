const users = [
  {
    fullName: "Alex Johnson",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    profession: "Software Engineer",
    description: "Passionate about building scalable web applications and exploring new technologies.",
    tags: ["JavaScript", "React", "Full-Stack", "Node.js"]
  },
  {
    fullName: "Maya Patel",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    profession: "Graphic Designer",
    description: "Creates visually compelling brand identities and modern UI layouts.",
    tags: ["UI/UX", "Branding", "Illustration", "Photoshop"]
  },
  {
    fullName: "David Lee",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    profession: "Digital Marketer",
    description: "SEO expert focused on organic traffic growth and data-driven campaigns.",
    tags: ["SEO", "Analytics", "Content Marketing", "PPC"]
  },
  {
    fullName: "Sara Ahmed",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    profession: "Data Scientist",
    description: "Turns complex datasets into meaningful insights through ML and AI.",
    tags: ["Python", "Machine Learning", "AI", "Data Analysis"]
  },
  {
    fullName: "Carlos Mendes",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    profession: "Product Manager",
    description: "Works on building user-centric products and defining long-term product vision.",
    tags: ["Product Strategy", "Roadmaps", "Agile", "User Research"]
  },
  {
    fullName: "Emily Carter",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    profession: "Photographer",
    description: "Specializes in portraits and lifestyle photography with natural lighting techniques.",
    tags: ["Photography", "Editing", "Portraits", "Lightroom"]
  },
  {
    fullName: "Hiro Tanaka",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    profession: "UX Researcher",
    description: "Conducts user studies and usability tests to improve product experience.",
    tags: ["UX Research", "User Testing", "Personas", "Design Thinking"]
  },
  {
    fullName: "Isabella Rossi",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    profession: "Content Writer",
    description: "Writes SEO-optimized articles and engaging long-form content.",
    tags: ["Writing", "SEO", "Storytelling", "Copywriting"]
  },
  {
    fullName: "Marcus Brown",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    profession: "Fitness Trainer",
    description: "Helps people achieve physical goals through personalized workout plans.",
    tags: ["Fitness", "Nutrition", "Strength Training", "Coaching"]
  },
  {
    fullName: "Nina Kovac",
    image: "https://images.unsplash.com/photo-1762526227019-0a7294ba6724?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzh8fHxlbnwwfHx8fHw%3D",
    profession: "UI/UX Designer",
    description: "Designs clean, modern interfaces with a strong focus on usability.",
    tags: ["Figma", "Prototyping", "Wireframing", "UI Design"]
  }
];

var sum = ''

users.forEach(function(elem){
    sum = sum + ` <div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`    
})

var main = document.querySelector('main')
main.innerHTML = sum