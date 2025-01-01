import img1 from './a.webp';
import img2 from './b.webp';
import img3 from './c.webp';
import img4 from './d.webp';
import img5 from './e.webp';

export const corgiVrhAImages = {
  gallery: [img1, img2, img3, img4, img5],
  get urls() {
    return this.gallery.map(img => img.src);
  }
};
