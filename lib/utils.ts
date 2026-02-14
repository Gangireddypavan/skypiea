import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Preload image sequences into memory
 * @param folderPath - Path to the folder containing images (e.g., "/sequence-1/")
 * @param count - Number of images to load
 * @param padLength - Number of digits for padding (default: 3 for 001, 002, etc.)
 * @returns Promise that resolves with array of loaded HTMLImageElement
 */
export async function preloadImages(
    folderPath: string,
    count: number,
    padLength: number = 3
): Promise<HTMLImageElement[]> {
    const promises: Promise<HTMLImageElement>[] = [];

    for (let i = 1; i <= count; i++) {
        const promise = new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            const paddedNumber = String(i).padStart(padLength, "0");
            img.src = `${folderPath}ezgif-frame-${paddedNumber}.jpg`;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
        promises.push(promise);
    }

    return Promise.all(promises);
}

/**
 * Draw image to canvas with cover behavior (like CSS object-fit: cover)
 */
export function drawImageCover(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvasWidth: number,
    canvasHeight: number
) {
    const imgAspect = img.width / img.height;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgAspect > canvasAspect) {
        // Image is wider than canvas
        drawHeight = canvasHeight;
        drawWidth = img.width * (canvasHeight / img.height);
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
    } else {
        // Image is taller than canvas
        drawWidth = canvasWidth;
        drawHeight = img.height * (canvasWidth / img.width);
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}
