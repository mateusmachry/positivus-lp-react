'use client';

import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const siteId = 6444885;
const hotjarVersion = 6;

export function HotjarSetup() {
    useEffect(() => {
        Hotjar.init(siteId, hotjarVersion);
    }, []);

    return null;
}