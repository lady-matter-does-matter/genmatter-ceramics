import { useState, useRef, useEffect } from 'react';
import { getImages, saveImages } from '../utils/storage';
import type { GalleryImage } from '../types';

function Catalogue() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImages(getImages());
  }, []);

  const handleUpload = () => {
    const files = fileInputRef.current?.files;
    if (!files || files.length === 0) {
      alert('Please select images to upload.');
      return;
    }

    const newImages: GalleryImage[] = [];
    let filesLoaded = 0;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        newImages.push({
          src: result,
          id: `${Date.now()}_${Math.random().toString(36).substr(2, 8)}`,
        });
        filesLoaded++;
        if (filesLoaded === files.length) {
          const updatedImages = [...images, ...newImages];
          setImages(updatedImages);
          saveImages(updatedImages);
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const removeImage = (id: string) => {
    const updatedImages = images.filter((img) => img.id !== id);
    setImages(updatedImages);
    saveImages(updatedImages);
  };

  return (
    <section id="catalogue-section">
      <h2>Catalogue</h2>
      <div id="upload-controls">
        <input
          type="file"
          id="image-upload"
          ref={fileInputRef}
          multiple
          accept="image/*"
        />
        <button id="upload-btn" onClick={handleUpload}>
          Upload Images
        </button>
      </div>
      <div id="gallery">
        {images.map(({ src, id }) => (
          <div key={id} className="gallery-image-container">
            <img src={src} alt="Ceramic piece" />
            <button className="remove-btn" onClick={() => removeImage(id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogue;

