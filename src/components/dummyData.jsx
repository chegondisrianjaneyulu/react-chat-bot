import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "User", status: "Active" },
    { id: 4, name: "Michael Brown", email: "michael.brown@example.com", role: "Editor", status: "Active" },
    { id: 5, name: "Emily Davis", email: "emily.davis@example.com", role: "Admin", status: "Inactive" },
    { id: 6, name: "David Wilson", email: "david.wilson@example.com", role: "User", status: "Active" },
    { id: 7, name: "Sarah Miller", email: "sarah.miller@example.com", role: "User", status: "Active" },
    { id: 8, name: "James Anderson", email: "james.anderson@example.com", role: "Editor", status: "Inactive" },
    { id: 9, name: "Olivia Martinez", email: "olivia.martinez@example.com", role: "User", status: "Active" },
    { id: 10, name: "William Taylor", email: "william.taylor@example.com", role: "User", status: "Active" },
    { id: 11, name: "Sophia Moore", email: "sophia.moore@example.com", role: "Admin", status: "Inactive" },
    { id: 12, name: "Ethan White", email: "ethan.white@example.com", role: "User", status: "Active" },
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "User", status: "Active" },
    { id: 4, name: "Michael Brown", email: "michael.brown@example.com", role: "Editor", status: "Active" },
    { id: 5, name: "Emily Davis", email: "emily.davis@example.com", role: "Admin", status: "Inactive" },
    { id: 6, name: "David Wilson", email: "david.wilson@example.com", role: "User", status: "Active" },
    { id: 7, name: "Sarah Miller", email: "sarah.miller@example.com", role: "User", status: "Active" },
    { id: 8, name: "James Anderson", email: "james.anderson@example.com", role: "Editor", status: "Inactive" },
    { id: 9, name: "Olivia Martinez", email: "olivia.martinez@example.com", role: "User", status: "Active" },
    { id: 10, name: "William Taylor", email: "william.taylor@example.com", role: "User", status: "Active" },
    { id: 11, name: "Sophia Moore", email: "sophia.moore@example.com", role: "Admin", status: "Inactive" },
    { id: 12, name: "Ethan White", email: "ethan.white@example.com", role: "User", status: "Active" },
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "User", status: "Active" },
    { id: 4, name: "Michael Brown", email: "michael.brown@example.com", role: "Editor", status: "Active" },
    { id: 5, name: "Emily Davis", email: "emily.davis@example.com", role: "Admin", status: "Inactive" },
    { id: 6, name: "David Wilson", email: "david.wilson@example.com", role: "User", status: "Active" },
    { id: 7, name: "Sarah Miller", email: "sarah.miller@example.com", role: "User", status: "Active" },
    { id: 8, name: "James Anderson", email: "james.anderson@example.com", role: "Editor", status: "Inactive" },
    { id: 9, name: "Olivia Martinez", email: "olivia.martinez@example.com", role: "User", status: "Active" },
    { id: 10, name: "William Taylor", email: "william.taylor@example.com", role: "User", status: "Active" },
    { id: 11, name: "Sophia Moore", email: "sophia.moore@example.com", role: "Admin", status: "Inactive" },
    { id: 12, name: "Ethan White", email: "ethan.white@example.com", role: "User", status: "Active" },
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "User", status: "Active" },
    { id: 4, name: "Michael Brown", email: "michael.brown@example.com", role: "Editor", status: "Active" },
    { id: 5, name: "Emily Davis", email: "emily.davis@example.com", role: "Admin", status: "Inactive" },
    { id: 6, name: "David Wilson", email: "david.wilson@example.com", role: "User", status: "Active" },
    { id: 7, name: "Sarah Miller", email: "sarah.miller@example.com", role: "User", status: "Active" },
    { id: 8, name: "James Anderson", email: "james.anderson@example.com", role: "Editor", status: "Inactive" },
    { id: 9, name: "Olivia Martinez", email: "olivia.martinez@example.com", role: "User", status: "Active" },
    { id: 10, name: "William Taylor", email: "william.taylor@example.com", role: "User", status: "Active" },
    { id: 11, name: "Sophia Moore", email: "sophia.moore@example.com", role: "Admin", status: "Inactive" },
    { id: 12, name: "Ethan White", email: "ethan.white@example.com", role: "User", status: "Active" },
];

const UserTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
