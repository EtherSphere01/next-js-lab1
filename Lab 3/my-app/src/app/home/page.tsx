"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  coupon_id: number;
  coupon_code: string;
}

const HomePage = () => {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    axios("http://localhost:3000/coupon/all").then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      {user.map((user) => {
        return (
          <div key={user.coupon_id}>
            <h1>{user.coupon_code}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
