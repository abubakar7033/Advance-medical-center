# Hero Image Setup

The hero section currently references `/images/hero-medical-imaging.jpg`.

## Quick Setup Options

### Option 1: Use a Stock Photo Service

Download a professional medical imaging photo from:

1. **Unsplash** (Free): https://unsplash.com/s/photos/medical-imaging
   - Search for: "MRI scanner", "CT scan", "medical technology"
   - Download and save as `hero-medical-imaging.jpg`

2. **Pexels** (Free): https://www.pexels.com/search/medical%20imaging/
   - High-quality medical photos
   - Download and save as `hero-medical-imaging.jpg`

### Option 2: Temporary Placeholder

For development, you can temporarily use a placeholder service by updating the Image component in `HeroSection.tsx`:

```tsx
<img 
  src="https://placehold.co/800x600/004E8C/ffffff?text=Medical+Imaging" 
  alt="Medical imaging equipment" 
  className="w-full h-auto rounded-2xl shadow-2xl shadow-brand-primary/10"
/>
```

### Option 3: Use Your Own Image

1. Take or source your own medical center photos
2. Optimize the image (compress, resize to 800x600 or similar)
3. Save as `hero-medical-imaging.jpg` in this folder

## Image Specifications

- **Dimensions**: 800x600 pixels (or similar 4:3 ratio)
- **Format**: JPG, WebP, or PNG
- **File Size**: < 500KB recommended
- **Subject**: Medical imaging equipment, CT/MRI scanners, diagnostic technology

## Next.js Image Optimization

Next.js automatically optimizes images when using the `Image` component. The framework will:

- Serve images in modern formats (WebP)
- Resize images on-demand
- Lazy load images
- Provide responsive images

No additional configuration needed!
