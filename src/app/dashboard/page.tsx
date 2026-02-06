'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter();

    useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin-login");
    }
  }, []);

  return (
    <div>
      Admin Dashboard Page
    </div>
  )
}

export default page
