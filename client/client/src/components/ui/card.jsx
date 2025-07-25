import React from "react";

export function Card({ className = "", ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`} {...props} />
  );
}

export function CardHeader({ className = "", ...props }) {
  return (
    <div className={`mb-4 ${className}`} {...props} />
  );
}

export function CardTitle({ className = "", ...props }) {
  return (
    <h2 className={`text-xl font-semibold ${className}`} {...props} />
  );
}

export function CardDescription({ className = "", ...props }) {
  return (
    <p className={`text-gray-500 text-sm ${className}`} {...props} />
  );
}

export function CardContent({ className = "", ...props }) {
  return (
    <div className={`mb-4 ${className}`} {...props} />
  );
}

export function CardFooter({ className = "", ...props }) {
  return (
    <div className={`mt-4 flex justify-end ${className}`} {...props} />
  );
} 