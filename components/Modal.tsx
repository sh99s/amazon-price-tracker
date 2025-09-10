"use client";

import { FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface Props {
  productId: string;
}

const Modal = ({ productId }: Props) => {
  let [isOpen, setIsOpen] = useState(false); // Changed from true to false
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: add UserEmailTo product (productid, email)

    setIsSubmitting(false);
    setEmail("");
    closeModal();
  };

  return (
    <>
      <button className="btn" type="button" onClick={openModal}>
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="dialog-container" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Fixed: Use div instead of Dialog.Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="dialog-content">
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="p-3 border border-gray-200 rounded-10">
                        <Image
                          src="/assets/icons/logo.svg"
                          alt="logo"
                          width={28}
                          height={28}
                        />
                      </div>
                      <Image
                        src="/assets/icons/x-close.svg"
                        alt="close"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={closeModal}
                      />
                    </div>

                    <Dialog.Title as="h4" className="dialog-head">
                      Stay updated with product pricing alerts right in your
                      inbox!
                    </Dialog.Title>

                    <p className="text-sm text-gray-600 mt-2">
                      Never miss a bargain again with our timely alerts!
                    </p>
                  </div>

                  <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>

                    <div className="dialog-input_container">
                      <Image
                        src="/assets/icons/mail.svg"
                        alt="mail"
                        width={18}
                        height={18}
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        id="email"
                        placeholder="Enter your email address"
                        className="dialog-input"
                      />
                    </div>

                    <button
                      type="submit"
                      className="dialog-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Track Product"}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
