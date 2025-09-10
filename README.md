# React + Vite Sample Project

# Proje Açıklaması

-İlk olarak “npm create vite@latest my-app -- --template react-ts” komutu ile Vite aracı kullanılarak my-app projesi oluşturuldu.
-src klasörü içine sayfalar, bileşenler ve API işlemleri için pages, components ve services klasörleri eklendi.
-“npm install react-router-dom” komutu ile React Router kuruldu.
-Homepage, Users, Posts gibi sayfalar için src/App.tsx dosyası içerisine Route’lar eklendi.
-src/pages klasörü içerisine basit bir Homepage sayfası eklendi.
-src/pages klasörü içerisine Users.tsx sayfası eklendi.
-src/pages klasörü içerisine Posts.tsx sayfası eklendi.
-Muhtemel api istekleri için src/services/api.ts dosyası oluşturuldu ve burada api CRUD iskeleti hazırlandı. Jsonplaceholder sitesinden Users ve Posts verilerini eş zamanlı olarak çekmek için fetchUsers ve fetchPosts fonksiyonları oluşturuldu.


Bu proje **React**, **TypeScript** ve **Vite** kullanılarak geliştirilmiştir.  
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) üzerinden örnek veriler çekilmekte ve **Users** ile **Posts** listeleri üzerinde CRUD (Create, Read, Update, Delete) işlemleri yapılabilmektedir.

---

## Özellikler
- React + TypeScript + Vite kurulumu
- React Router ile sayfa yönlendirmeleri
- Sayfalar:
  - Homepage (Users ve Posts sayfalarına bağlantılar)
  - Users (listeleme, ekleme, düzenleme, silme)
  - Posts (listeleme, ekleme, düzenleme, silme, Users ile ilişki gösterimi)
- JSONPlaceholder API üzerinden veri çekme
- Basit UI/UX düzenlemeleri (tablolar, formlar, butonlar)
- ESLint ile kod kalite kontrolü

---

## Gereksinimler
- [Node.js](https://nodejs.org/) **v18+** (proje v22 üzerinde test edilmiştir)
- npm (Node.js ile birlikte gelir)

---

## Kurulum
Projeyi bilgisayarınıza klonlayın ve bağımlılıkları yükleyin:

```bash
# Projeyi klonlayın
git clone https://github.com/your-username/my-app.git

# Proje klasörüne girin
cd my-app

# Bağımlılıkları yükleyin
npm install
