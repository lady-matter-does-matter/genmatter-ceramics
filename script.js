// Navigation toggle
const navTabs = [
    { tab: 'catalogue-tab', section: 'catalogue-section' },
    { tab: 'about-tab', section: 'about-section' },
    { tab: 'contact-tab', section: 'contact-section' }
];
navTabs.forEach(({ tab, section }) => {
    document.getElementById(tab).addEventListener('click', (e) => {
        e.preventDefault();
        navTabs.forEach(({ section: sec }) => {
            document.getElementById(sec).classList.remove('active');
        });
        document.getElementById(section).classList.add('active');
    });
});
// Image upload/remove
const imageUpload = document.getElementById('image-upload');
const uploadBtn = document.getElementById('upload-btn');
const gallery = document.getElementById('gallery');
// Store images (base64 in localStorage for demo; real implementation uses a backend)
function getImages() {
    return JSON.parse(localStorage.getItem('ceramics.galleryImages') || '[]');
}
function saveImages(images) {
    localStorage.setItem('ceramics.galleryImages', JSON.stringify(images));
}
function renderGallery() {
    const images = getImages();
    gallery.innerHTML = '';
    images.forEach(({ src, id }) => {
        const container = document.createElement('div');
        container.className = 'gallery-image-container';
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Ceramic piece';
        const rmBtn = document.createElement('button');
        rmBtn.className = 'remove-btn';
        rmBtn.textContent = 'Remove';
        rmBtn.onclick = () => {
            removeImage(id);
        };
        container.appendChild(img);
        container.appendChild(rmBtn);
        gallery.appendChild(container);
    });
}
function removeImage(id) {
    let images = getImages();
    images = images.filter(img => img.id !== id);
    saveImages(images);
    renderGallery();
}
uploadBtn.addEventListener('click', () => {
    const files = imageUpload.files;
    if (!files.length) {
        alert('Please select images to upload.');
        return;
    }
    const images = getImages();
    let filesLoaded = 0;
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(event) {
            images.push({ src: event.target.result, id: Date.now() + '_' + Math.random().toString(36).substr(2,8) });
            filesLoaded++;
            if (filesLoaded === files.length) {
                saveImages(images);
                renderGallery();
                imageUpload.value = '';
            }
        };
        reader.readAsDataURL(files[i]);
    }
});
// About section (with draft/persisted content)
const aboutText = document.getElementById('about-text');
const saveAbout = document.getElementById('save-about');
const ABOUT_KEY = 'ceramics.aboutText';
// Load if present
aboutText.value = localStorage.getItem(ABOUT_KEY) || '';
saveAbout.addEventListener('click', () => {
    localStorage.setItem(ABOUT_KEY, aboutText.value);
    saveAbout.textContent = 'Saved!';
    setTimeout(()=>{saveAbout.textContent = 'Save';}, 1100);
});
// Gallery bootstrap on load
renderGallery();
