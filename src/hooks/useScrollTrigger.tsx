import { useEffect } from "react";

import { useState } from "react";

export const useScrollTrigger = (sectionId: string) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`#${sectionId}`) as HTMLElement;
      if (section) {
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionBottom < 0) {
          setShowModal(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionId]);

  return showModal;
};
