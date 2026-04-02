"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
    useEffect(() => {
        AOS.init({ duration: 400, once: false });
        AOS.refresh()
    }, []);

    return null;
}