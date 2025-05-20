import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', imageSrc: 'https://picsum.photos/seed/user1/380/380', bio: 'Software engineer with a passion for building innovative web applications.' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', imageSrc: 'https://picsum.photos/seed/user2/380/380', bio: 'Graphic designer who loves creating vibrant, user-friendly interfaces.' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', imageSrc: 'https://picsum.photos/seed/user3/380/380', bio: 'Avid hiker and photographer, capturing nature’s beauty.' },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', imageSrc: 'https://picsum.photos/seed/user4/380/380', bio: 'Marketing specialist focused on digital campaigns and branding.' },
    { id: 5, name: 'Michael Brown', email: 'michael.brown@example.com', imageSrc: 'https://picsum.photos/seed/user5/380/380', bio: 'Data analyst who enjoys turning numbers into actionable insights.' },
    { id: 6, name: 'Sarah Wilson', email: 'sarah.wilson@example.com', imageSrc: 'https://picsum.photos/seed/user6/380/380', bio: 'Freelance writer and coffee enthusiast, always chasing a good story.' },
    { id: 7, name: 'David Lee', email: 'david.lee@example.com', imageSrc: 'https://picsum.photos/seed/user7/380/380', bio: 'Fitness coach dedicated to helping others achieve their goals.' },
    { id: 8, name: 'Laura Martinez', email: 'laura.martinez@example.com', imageSrc: 'https://picsum.photos/seed/user8/380/380', bio: 'Environmental advocate working for sustainable solutions.' },
    { id: 9, name: 'James Taylor', email: 'james.taylor@example.com', imageSrc: 'https://picsum.photos/seed/user9/380/380', bio: 'Music producer with a love for jazz and classical genres.' },
    { id: 10, name: 'Anna Clark', email: 'anna.clark@example.com', imageSrc: 'https://picsum.photos/seed/user10/380/380', bio: 'Teacher inspiring the next generation with creative learning.' },
    { id: 11, name: 'Chris Evans', email: 'chris.evans@example.com', imageSrc: 'https://picsum.photos/seed/user11/380/380', bio: 'Entrepreneur building startups in the tech industry.' },
    { id: 12, name: 'Megan Turner', email: 'megan.turner@example.com', imageSrc: 'https://picsum.photos/seed/user12/380/380', bio: 'Travel blogger exploring cultures and cuisines worldwide.' },
    { id: 13, name: 'Daniel White', email: 'daniel.white@example.com', imageSrc: 'https://picsum.photos/seed/user13/380/380', bio: 'Architect designing sustainable and modern living spaces.' },
    { id: 14, name: 'Olivia Green', email: 'olivia.green@example.com', imageSrc: 'https://picsum.photos/seed/user14/380/380', bio: 'Yoga instructor promoting wellness and mindfulness.' },
    { id: 15, name: 'Thomas Adams', email: 'thomas.adams@example.com', imageSrc: 'https://picsum.photos/seed/user15/380/380', bio: 'Chef specializing in farm-to-table cuisine.' },
    { id: 16, name: 'Sophie Hall', email: 'sophie.hall@example.com', imageSrc: 'https://picsum.photos/seed/user16/380/380', bio: 'Illustrator creating whimsical art for books and games.' },
    { id: 17, name: 'Ryan Baker', email: 'ryan.baker@example.com', imageSrc: 'https://picsum.photos/seed/user17/380/380', bio: 'Cybersecurity expert protecting digital assets.' },
    { id: 18, name: 'Emma Lewis', email: 'emma.lewis@example.com', imageSrc: 'https://picsum.photos/seed/user18/380/380', bio: 'Event planner organizing unforgettable experiences.' },
    { id: 19, name: 'Liam Walker', email: 'liam.walker@example.com', imageSrc: 'https://picsum.photos/seed/user19/380/380', bio: 'Gamer and streamer sharing tips and epic moments.' },
    { id: 20, name: 'Chloe Harris', email: 'chloe.harris@example.com', imageSrc: 'https://picsum.photos/seed/user20/380/380', bio: 'Biologist researching marine ecosystems and conservation.' },
  ];
const UserDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const user = users.find(u => u.id === parseInt(id));
  
    if (!user) {
      return <div className="container mx-auto p-6">User not found</div>;
    }
  
    return (
        <div className='w-full flex justify-center items-center mt-10 '>
        <div className="card card-side bg-base-100 max-w-[700px] shadow-sm border border-white">
  <figure>
    <img
      src={user.imageSrc}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.name}'s Details</h2>
    <p className="text-lg mb-2"><strong>Email:</strong> {user.email}</p>
    <p className="text-lg mb-4"><strong>Bio:</strong> {user.bio}</p>
    <div className="card-actions justify-end">
    <button
          onClick={() => navigate('/users')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Users
        </button>
    </div>
  </div>
</div>
        </div>

    
    );
  
}

export default UserDetail