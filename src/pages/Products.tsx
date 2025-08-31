import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Products() {
     const navigate = useNavigate();
  
   useEffect(() => {
      // redirect immediately when component mounts
      navigate('/products/erp', { replace: true });
    }, [navigate]);
  return (
    <div>Products</div>
  )
}
