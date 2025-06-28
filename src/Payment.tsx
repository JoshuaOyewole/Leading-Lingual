import React, { useState } from "react";
import { AlertCircle, X, CreditCard } from "lucide-react";

interface CourseEnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PAYSTACK_LINK = "https://paystack.shop/pay/gsaleadinglingual";
// Replace with your WhatsApp group link

const CourseEnrollmentModal: React.FC<CourseEnrollmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [selectedCourseId, setSelectedCourseId] = useState<string>("beginner1");

  const courses = [
    {
      id: "beginner1",
      name: "Introduction in Networking & CyberSecurity",
      level: "Beginner",
      price: 10000,
    },
    {
      id: "beginner2",
      name: "Data Analysis",
      level: "Beginner",
      price: 10000,
    },
    {
      id: "beginner3",
      name: "Video Editing and Content Creation",
      level: "Beginner",
      price: 10000,
    },
    {
      id: "beginner4",
      name: "Photography & Photo Editing",
      level: "Beginner",
      price: 10000,
    },
    {
      id: "beginner5",
      name: "Introduction to Website design and Management",
      level: "Beginner",
      price: 10000,
    },
    {
      id: "beginner6",
      name: "Introduction to Project management",
      level: "Beginner",
      price: 10000,
    },
    {
      id: "beginner7",
      name: "Social Media management",
      level: "Beginner",
      price: 10000,
    },
  ];

  const validateForm = (): boolean => {
    if (!customerName.trim()) {
      setError("Please enter your full name");
      return false;
    }
    if (!customerEmail.trim()) {
      setError("Please enter your email address");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const handleContinueToPayment = () => {
    if (!validateForm()) return;
    setCurrentStep(2);
  };

  const handlePaystackClick = () => {
    setCurrentStep(2);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setCustomerEmail("");
    setCustomerName("");
    setError("");
    setSelectedCourseId("beginner1");
  };

  const closeModal = () => {
    onClose();
    resetForm();
  };

  const selectedCourse = courses.find((c) => c.id === selectedCourseId);

  //   const downloadReceipt = () => {
  //     if (!customerName || !customerEmail || !selectedCourse) return;
  //     const content = `
  // GSA Leading Lingual Course - Enrollment Receipt

  // Student Name: ${customerName}
  // Email: ${customerEmail}
  // Course: ${selectedCourse.name}
  // Level: ${selectedCourse.level}
  // Amount: ₦${selectedCourse.price.toLocaleString()}

  // Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}

  // This receipt, together with your Paystack payment receipt, confirms your registration.
  //     `;
  //     const blob = new Blob([content], { type: "text/plain" });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = `GSA-Receipt-${customerName.replace(/\s+/g, "_")}.txt`;
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //     URL.revokeObjectURL(url);
  //   };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold">Course Enrollment</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
                title="Close"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {currentStep === 1 && (
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Student Information
                  </h3>

                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-100 text-red-700 border border-red-200 rounded mb-4">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="course-select"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Select Course
                      </label>
                      <select
                        id="course-select"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={selectedCourseId}
                        onChange={(e) => setSelectedCourseId(e.target.value)}
                      >
                        {courses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.name} - ₦{course.price.toLocaleString()}
                          </option>
                        ))}
                      </select>
                      <p className="text-red-500">
                        NB: Tuition is free but certificate and registration fee
                        is required{" "}
                      </p>
                    </div>

                    <button
                      onClick={handleContinueToPayment}
                      className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-indigo-600 hover:text-indigo-800 mb-4 text-sm"
                  >
                    ← Back to Student Information
                  </button>

                  <h3 className="text-lg font-medium mb-4">Payment Details</h3>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Order Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Student:</span>
                        <span className="font-medium">{customerName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{customerEmail}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Course:</span>
                        <span className="font-medium">
                          {selectedCourse?.name}
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2 font-semibold">
                        <span>Total:</span>
                        <span>₦{selectedCourse?.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={PAYSTACK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors gap-2 text-center mb-4"
                    onClick={handlePaystackClick}
                  >
                    <CreditCard className="w-5 h-5" />
                    Pay with Paystack
                  </a>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Secure payment powered by Paystack
                  </p>
                </div>
              )}

              {/* {currentStep === 3 && (
                <div>
                  <h3 className="text-lg font-medium mb-4 text-green-700">
                    Next Steps: Complete Your Registration
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <span className="font-semibold">
                          Download your course receipt:
                        </span>
                        <button
                          onClick={downloadReceipt}
                          className="ml-2 inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download Receipt
                        </button>
                      </li>
                      <li>
                        <span className="font-semibold">
                          On the Paystack page:
                        </span>
                        Complete your payment and download your Paystack payment
                        receipt.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Join our WhatsApp group:
                        </span>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center text-green-700 underline"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Join WhatsApp Group
                        </a>
                      </li>
                    </ol>
                  </div>
                  <div className="text-gray-700 text-sm mb-2">
                    <strong>Note:</strong> Your downloaded course receipt and
                    your Paystack payment receipt together confirm your
                    registration.
                  </div>
                  <div className="text-xs text-gray-500">
                    If you have any issues, please contact support.
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseEnrollmentModal;
