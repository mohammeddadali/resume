document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: '2022 - Present',
        title: 'Co-founder & CEO, Brilliant Dream',
        description: 'Leaded and managed Brilliant Dream operations, as well as developing and executing business strategies, policies, and procedures. I am responsible for overseeing all aspects of Brilliant Dream, including hiring, training, performance management, quality assurance, marketing, sales, finance, and technology. I also identify and pursue new opportunities for growth and expansion in the call center industry.'
    },
    {
        date: '2017 - 2022',
        title: 'Customer Service Advisor, Xceed Maroc',
        description: 'Managed customer inquiries with a focus on ensuring satisfaction and retention. Implemented an approach rooted in active listening and empathy, treating each customer with respect and understanding. Contributed to customer satisfaction and retention by providing excellent service and addressing customer needs effectively.'
    },
    {
        date: '2016 - 2017',
        title: 'Helpdesk Agent, Cloudeco',
        description: 'Guided customers through the installation and usage of our security and backup solutions. Assisted customers in restoring important files from our servers, ensuring effective use of our products. Improved customer experience by providing timely and accurate assistance.'
    },
    {
        date: '2014 - 2016',
        title: 'Teleconsultant, Intelcia',
        description: 'Optimized routes for Orange technicians as part of the Solutions 30 project. Ensured efficient resolution of internet outages for our customers by coordinating technician visits. Enhanced company efficiency by reducing technician travel time and increasing customer satisfaction.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
