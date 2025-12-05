# Medical Center Images

This folder contains all images used in the Medical Center website.

## Required Images

1. **hero-medical-imaging.jpg** (800x600)
   - Main hero section image showing medical imaging equipment
   - Should feature CT/MRI scanners or medical diagnostic equipment
   - Recommended: Professional, modern medical technology

## Adding Images

Place your images in this folder and reference them in your components using:

```jsx
import Image from 'next/image';

<Image 
  src="/images/your-image-name.jpg" 
  alt="Description" 
  width={800}
  height={600}
/>
```

## Image Guidelines

- Use optimized images (WebP format recommended for Next.js)
- Maintain appropriate aspect ratios
- Keep file sizes reasonable (< 500KB preferred)
- Use descriptive alt text for accessibility
