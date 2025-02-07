"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("/api/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Layout>
            <div className="p-6 bg-white shadow-md rounded-lg">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Profile</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any) => (
                            <tr key={user._id} className="text-center">
                                <td className="border p-2">
                                    <img src={user.profilepic} alt="Profile" className="w-10 h-10 rounded-full mx-auto" />
                                </td>
                                <td className="border p-2">{user.name}</td>
                                <td className="border p-2">{user.email}</td>
                                <td className="border p-2">
                                    <select className="border p-1 rounded">
                                        <option value="Admin" selected={user.isAdmin === true}>Admin</option>
                                        <option value="User" selected={user.isAdmin === false}>User</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Users;
