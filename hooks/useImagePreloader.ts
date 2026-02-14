import { useEffect, useState } from "react";
import { preloadImages } from "@/lib/utils";

interface UseImagePreloaderReturn {
    images: HTMLImageElement[];
    isLoading: boolean;
    progress: number;
}

export function useImagePreloader(
    folderPath: string,
    frameCount: number,
    padLength: number = 3
): UseImagePreloaderReturn {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let loadedCount = 0;

        const loadImages = async () => {
            try {
                const imgArray: HTMLImageElement[] = [];

                for (let i = 1; i <= frameCount; i++) {
                    const img = new Image();
                    const paddedNumber = String(i).padStart(padLength, "0");
                    img.src = `${folderPath}ezgif-frame-${paddedNumber}.jpg`;

                    await new Promise<void>((resolve, reject) => {
                        img.onload = () => {
                            loadedCount++;
                            if (isMounted) {
                                setProgress(Math.round((loadedCount / frameCount) * 100));
                            }
                            resolve();
                        };
                        img.onerror = reject;
                    });

                    imgArray.push(img);
                }

                if (isMounted) {
                    setImages(imgArray);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Error loading images:", error);
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [folderPath, frameCount, padLength]);

    return { images, isLoading, progress };
}
