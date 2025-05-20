import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', imageSrc: 'https://picsum.photos/seed/user1/380/380' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', imageSrc: 'https://picsum.photos/seed/user2/380/380' },
        { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', imageSrc: 'https://picsum.photos/seed/user3/380/380' },
        { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', imageSrc: 'https://picsum.photos/seed/user4/380/380' },
        { id: 5, name: 'Michael Brown', email: 'michael.brown@example.com', imageSrc: 'https://picsum.photos/seed/user5/380/380' },
        { id: 6, name: 'Sarah Wilson', email: 'sarah.wilson@example.com', imageSrc: 'https://picsum.photos/seed/user6/380/380' },
        { id: 7, name: 'David Lee', email: 'david.lee@example.com', imageSrc: 'https://picsum.photos/seed/user7/380/380' },
        { id: 8, name: 'Laura Martinez', email: 'laura.martinez@example.com', imageSrc: 'https://picsum.photos/seed/user8/380/380' },
        { id: 9, name: 'James Taylor', email: 'james.taylor@example.com', imageSrc: 'https://picsum.photos/seed/user9/380/380' },
        { id: 10, name: 'Anna Clark', email: 'anna.clark@example.com', imageSrc: 'https://picsum.photos/seed/user10/380/380' },
        { id: 11, name: 'Chris Evans', email: 'chris.evans@example.com', imageSrc: 'https://picsum.photos/seed/user11/380/380' },
        { id: 12, name: 'Megan Turner', email: 'megan.turner@example.com', imageSrc: 'https://picsum.photos/seed/user12/380/380' },
        { id: 13, name: 'Daniel White', email: 'daniel.white@example.com', imageSrc: 'https://picsum.photos/seed/user13/380/380' },
        { id: 14, name: 'Olivia Green', email: 'olivia.green@example.com', imageSrc: 'https://picsum.photos/seed/user14/380/380' },
        { id: 15, name: 'Thomas Adams', email: 'thomas.adams@example.com', imageSrc: 'https://picsum.photos/seed/user15/380/380' },
        { id: 16, name: 'Sophie Hall', email: 'sophie.hall@example.com', imageSrc: 'https://picsum.photos/seed/user16/380/380' },
        { id: 17, name: 'Ryan Baker', email: 'ryan.baker@example.com', imageSrc: 'https://picsum.photos/seed/user17/380/380' },
        { id: 18, name: 'Emma Lewis', email: 'emma.lewis@example.com', imageSrc: 'https://picsum.photos/seed/user18/380/380' },
        { id: 19, name: 'Liam Walker', email: 'liam.walker@example.com', imageSrc: 'https://picsum.photos/seed/user19/380/380' },
        { id: 20, name: 'Chloe Harris', email: 'chloe.harris@example.com', imageSrc: 'https://picsum.photos/seed/user20/380/380' },
      ];
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Users List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {users.map(user => (
          <li key={user.id} className="border rounded-lg shadow-sm overflow-hidden">
            <Link to={`/users/${user.id}`} className="block hover:bg-gray-800">
              <div className="flex flex-col sm:flex-row">
                <figure className="w-full sm:w-1/3">
                  <img
                    src={user.imageSrc}
                    alt={user.name}
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </figure>
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-300">{user.name}</h2>
                    <p className="text-gray-200 text-sm sm:text-base">{user.email}</p>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-primary btn-sm w-full sm:w-auto">View Profile</button>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;