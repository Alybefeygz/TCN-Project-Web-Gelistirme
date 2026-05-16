# Web Geliştirme Proje Planı

Bu plan, `project-rules.md` dosyasındaki kurallara göre sade, eksiksiz ve eğitim seviyesine uygun bir React projesi geliştirmek için hazırlanmıştır.

Proje hedefi: React ile çalışan, ekleme, listeleme, güncelleme ve silme işlemlerini yapan basit bir görev takip uygulaması hazırlamak.

## Önemli Uyarı

Proje kurulumu sırasında klasörde `project-rules.md` ve `project-plans.md` dosyaları durabilir. Vite "Current directory is not empty" diye sorarsa:

```text
Ignore files and continue
```

seçilir.

Kesinlikle şu seçenek seçilmez:

```text
Remove existing files and continue
```

Çünkü bu seçenek mevcut dosyaları silebilir.

## Genel Çalışma Kuralı

Her geliştirme adımı ayrı bir branch üzerinde yapılacak. İşlem bitince branch push edilecek. Branch GitHub üzerinden `main` branch'e merge edildikten sonra tekrar `main` branch'in güncel hali çekilecek.

Her adımın başlangıç komutları:

```bash
git checkout main
git pull origin main
git checkout -b branch-adi
```

Her adımın bitirme komutları:

```bash
git status
git add .
git commit -m "Anlamli commit mesaji"
git push -u origin branch-adi
```

GitHub üzerinden Pull Request açılıp branch `main` içine merge edildikten sonra:

```bash
git checkout main
git pull origin main
```

## 1. Adım: Git Reposunu Hazırlama

Branch adı:

```bash
setup/project-documents
```

Bu adımda yapılacaklar:

- `project-rules.md` ve `project-plans.md` dosyalarının klasörde durduğu kontrol edilecek.
- Eğer klasörde `.git` yoksa Git başlatılacak.
- İlk commit doküman dosyalarıyla yapılacak.
- Bu sayede proje kurulumu sırasında plan dosyaları kaybolursa Git geçmişinden geri alınabilecek.

Terminal komutları:

```bash
ls -la project-rules.md project-plans.md
git init
git status
git add project-rules.md project-plans.md
git commit -m "Proje kurallari ve planini ekle"
```

Eğer remote GitHub repo hazırsa:

```bash
git branch -M main
git remote add origin GITHUB_REPO_LINKI
git push -u origin main
```

Kontrol:

- `git status` temiz veya sadece beklenen dosyaları göstermeli.
- GitHub kullanılacaksa `main` branch GitHub üzerinde görünmeli.

## 2. Adım: React + Vite Proje Kurulumu

Branch adı:

```bash
setup/react-vite-project
```

Bu adımda yapılacaklar:

- React + Vite projesi kurulacak.
- Proje JavaScript template ile hazırlanacak.
- Projenin tarayıcıda çalıştığı kontrol edilecek.
- `project-rules.md` ve `project-plans.md` korunacak.

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b setup/react-vite-project
npm create vite@latest . -- --template react
```

Vite soru sorarsa:

```text
Ignore files and continue
```

seçilir.

Sonra:

```bash
npm install
npm run dev
```

Kontrol:

- `package.json` oluşmuş olmalı.
- `npm run dev` hatasız çalışmalı.
- Tarayıcıda `http://localhost:5173/` açılmalı.
- `project-rules.md` ve `project-plans.md` hala klasörde olmalı.

Kontrol komutu:

```bash
ls -la project-rules.md project-plans.md package.json
```

Bitirme komutları:

```bash
git status
git add .
git commit -m "React Vite proje kurulumunu yap"
git push -u origin setup/react-vite-project
git checkout main
git pull origin main
```

## 3. Adım: Klasör Yapısını Hazırlama

Branch adı:

```bash
setup/project-folders
```

Bu adımda yapılacaklar:

- `src` altında kurallarda istenen klasörler oluşturulacak.
- Klasör isimleri açık ve kurala uygun olacak.
- Bu adımda uygulama mantığı yazılmayacak, sadece yapı hazırlanacak.

Oluşturulacak klasörler:

- `src/Components`
- `src/Pages`
- `src/Interfaces`

Klasörlerin amacı:

- `Components`: Form, liste ve görev satırı gibi tekrar kullanılan parçalar.
- `Pages`: Ana uygulama ekranı.
- `Interfaces`: Görev verisinin örnek modeli ve açıklaması.

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b setup/project-folders
mkdir -p src/Components src/Pages src/Interfaces
```

Kontrol komutu:

```bash
ls src
```

Bitirme komutları:

```bash
git status
git add .
git commit -m "Proje klasor yapisini olustur"
git push -u origin setup/project-folders
git checkout main
git pull origin main
```

## 4. Adım: Temel Sayfa ve Stil Hazırlığı

Branch adı:

```bash
feature/basic-layout
```

Bu adımda yapılacaklar:

- Varsayılan Vite ekranı temizlenecek.
- Ana sayfa düzeni hazırlanacak.
- Proje sade, anlaşılır ve eğitim seviyesine uygun görünecek.
- Pure CSS kullanılacak.
- Başlık, görev formu alanı ve görev listesi alanı için temel yerleşim yapılacak.
- Henüz tam CRUD mantığı yazılmayacak.

Dosya hedefleri:

- `src/App.jsx`
- `src/App.css`
- `src/Pages/HomePage.jsx`

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b feature/basic-layout
npm run dev
```

Kontrol:

- Sayfa sade ve okunabilir görünmeli.
- Mobil ve masaüstü görünümde ciddi bozulma olmamalı.
- Gereksiz animasyon veya karmaşık yapı kullanılmamalı.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "Temel sayfa duzenini hazirla"
git push -u origin feature/basic-layout
git checkout main
git pull origin main
```

## 5. Adım: Veri Modeli ve Örnek Görevler

Branch adı:

```bash
feature/task-data-model
```

Bu adımda yapılacaklar:

- Görev verisinin hangi alanlardan oluşacağı belirlenecek.
- Birkaç örnek görev hazırlanacak.
- Veri modeli basit tutulacak.
- TypeScript gibi daha ileri yapılar kullanılmayacak.

Görev alanları:

- `id`
- `title`
- `description`
- `status`

Örnek durum değerleri:

- `Bekliyor`
- `Tamamlandı`

Dosya hedefleri:

- `src/Interfaces/taskModel.js`

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b feature/task-data-model
npm run dev
```

Kontrol:

- Görev alanları anlaşılır olmalı.
- Model dosyası gereğinden fazla büyümemeli.
- Uygulama hata vermeden çalışmalı.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "Gorev veri modelini hazirla"
git push -u origin feature/task-data-model
git checkout main
git pull origin main
```

## 6. Adım: Listeleme İşlemi

Branch adı:

```bash
feature/list-tasks
```

Bu adımda yapılacaklar:

- Görevler ekranda listelenecek.
- Her görev için başlık, açıklama ve durum bilgisi gösterilecek.
- Liste boşsa basit bir boş liste mesajı gösterilecek.
- Kod tek dosyada şişirilmeden componentlere ayrılacak.

Dosya hedefleri:

- `src/Components/TaskList.jsx`
- `src/Components/TaskItem.jsx`
- `src/Pages/HomePage.jsx`

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b feature/list-tasks
npm run dev
```

Kontrol:

- En az birkaç örnek görev listelenmeli.
- Listeleme işlemi ekranda net görünmeli.
- `npm run build` hatasız çalışmalı.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "Gorev listeleme islemini ekle"
git push -u origin feature/list-tasks
git checkout main
git pull origin main
```

## 7. Adım: Ekleme İşlemi

Branch adı:

```bash
feature/add-task
```

Bu adımda yapılacaklar:

- Kullanıcının yeni görev ekleyebilmesi sağlanacak.
- Formda görev başlığı ve açıklama alanı olacak.
- Boş başlık ile kayıt yapılması engellenecek.
- Yeni eklenen görev listeye düşecek.
- Form kayıttan sonra temizlenecek.

Dosya hedefleri:

- `src/Components/TaskForm.jsx`
- `src/Pages/HomePage.jsx`

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b feature/add-task
npm run dev
```

Kontrol:

- Yeni görev eklenebilmeli.
- Boş görev eklenmemeli.
- Eklenen görev sayfa yenilenmeden listede görünmeli.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "Gorev ekleme islemini ekle"
git push -u origin feature/add-task
git checkout main
git pull origin main
```

## 8. Adım: Güncelleme İşlemi

Branch adı:

```bash
feature/update-task
```

Bu adımda yapılacaklar:

- Var olan görevin başlığı ve açıklaması düzenlenebilecek.
- Görevin durumu `Bekliyor` veya `Tamamlandı` olarak değiştirilebilecek.
- Düzenleme işlemi sade bir form üzerinden yapılacak.
- Düzenleme iptal edilebilecek.

Dosya hedefleri:

- `src/Components/TaskForm.jsx`
- `src/Components/TaskItem.jsx`
- `src/Pages/HomePage.jsx`

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b feature/update-task
npm run dev
```

Kontrol:

- Bir görev seçilip düzenlenebilmeli.
- Güncelleme sonrası liste yeni bilgileri göstermeli.
- İptal işlemi formu eski haline döndürmeli.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "Gorev guncelleme islemini ekle"
git push -u origin feature/update-task
git checkout main
git pull origin main
```

## 9. Adım: Silme İşlemi

Branch adı:

```bash
feature/delete-task
```

Bu adımda yapılacaklar:

- Her görev için silme butonu eklenecek.
- Silinen görev listeden kaldırılacak.
- Yanlışlıkla silmeyi azaltmak için basit onay sorusu kullanılabilir.
- Liste boş kalırsa boş liste mesajı görünmeli.

Dosya hedefleri:

- `src/Components/TaskItem.jsx`
- `src/Pages/HomePage.jsx`

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b feature/delete-task
npm run dev
```

Kontrol:

- Görev silinebilmeli.
- Silme sonrası liste doğru güncellenmeli.
- `npm run build` hatasız çalışmalı.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "Gorev silme islemini ekle"
git push -u origin feature/delete-task
git checkout main
git pull origin main
```

## 10. Adım: LocalStorage ile Veri Saklama

Branch adı:

```bash
feature/local-storage
```

Bu adımda yapılacaklar:

- Görevler tarayıcıda `localStorage` içinde saklanacak.
- Sayfa yenilendiğinde eklenen görevler kaybolmayacak.
- Backend kullanılmayacak, böylece Netlify yayını kolay kalacak.

Dosya hedefleri:

- `src/Pages/HomePage.jsx`
- Gerekirse `src/Interfaces/taskModel.js`

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b feature/local-storage
npm run dev
```

Kontrol:

- Görev ekle, sayfayı yenile, görev hala görünmeli.
- Görev güncelle, sayfayı yenile, güncel hali görünmeli.
- Görev sil, sayfayı yenile, silinen görev geri gelmemeli.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "LocalStorage ile veri saklama ekle"
git push -u origin feature/local-storage
git checkout main
git pull origin main
```

## 11. Adım: Son Tasarım Düzenlemeleri

Branch adı:

```bash
style/final-ui-adjustments
```

Bu adımda yapılacaklar:

- CSS düzenlemeleri tamamlanacak.
- Butonlar, formlar ve liste daha okunabilir hale getirilecek.
- Tasarım sade ve öğrenci projesine uygun tutulacak.
- Çok profesyonel, karmaşık veya gereksiz görsel efektlerden kaçınılacak.

Dosya hedefleri:

- `src/App.css`
- Gerekirse component dosyaları

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b style/final-ui-adjustments
npm run dev
```

Kontrol:

- Sayfa masaüstünde düzgün görünmeli.
- Sayfa mobil genişlikte bozulmamalı.
- Form ve buton yazıları taşmamalı.
- CRUD işlemleri tasarım değişikliğinden sonra da çalışmalı.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "Son arayuz duzenlemelerini yap"
git push -u origin style/final-ui-adjustments
git checkout main
git pull origin main
```

## 12. Adım: README ve Ekran Görüntüsü

Branch adı:

```bash
docs/readme-and-screenshot
```

Bu adımda yapılacaklar:

- README dosyası hazırlanacak.
- Projenin amacı kısa ve anlaşılır anlatılacak.
- Kullanılan teknolojiler yazılacak.
- Kurulum ve çalıştırma komutları eklenecek.
- En az bir ekran görüntüsü projeye eklenecek.

Dosya hedefleri:

- `README.md`
- `screenshots/homepage.png`

README içinde bulunacak başlıklar:

- Proje adı
- Proje açıklaması
- Kullanılan teknolojiler
- Özellikler
- Kurulum
- Çalıştırma
- Ekran görüntüsü
- Canlı link

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b docs/readme-and-screenshot
npm run dev
mkdir -p screenshots
```

Kontrol:

- README sade olmalı.
- Ekran görüntüsü görünür ve anlaşılır olmalı.
- Canlı link henüz yoksa README içinde daha sonra doldurulacak şekilde bırakılabilir.

Bitirme komutları:

```bash
npm run build
git status
git add .
git commit -m "README ve ekran goruntusunu ekle"
git push -u origin docs/readme-and-screenshot
git checkout main
git pull origin main
```

## 13. Adım: Son Test ve Build Kontrolü

Branch adı:

```bash
test/final-build-check
```

Bu adımda yapılacaklar:

- Proje baştan sona test edilecek.
- Ekleme, listeleme, güncelleme ve silme işlemleri tek tek kontrol edilecek.
- Build alınarak Netlify için hazır olup olmadığı kontrol edilecek.
- Gereksiz dosya veya kullanılmayan import varsa temizlenecek.

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b test/final-build-check
npm install
npm run build
npm run dev
```

Manuel test listesi:

- Yeni görev ekleniyor mu?
- Görevler listeleniyor mu?
- Görev güncelleniyor mu?
- Görev siliniyor mu?
- Sayfa yenilenince veriler korunuyor mu?
- Mobil görünüm bozuluyor mu?
- Console üzerinde ciddi hata var mı?

Bitirme komutları:

```bash
git status
git add .
git commit -m "Son test ve build kontrolunu yap"
git push -u origin test/final-build-check
git checkout main
git pull origin main
```

## 14. Adım: GitHub ve Netlify Yayına Alma

Branch adı:

```bash
deploy/netlify-release
```

Bu adımda yapılacaklar:

- GitHub reposunun public olduğundan emin olunacak.
- Netlify üzerinde proje GitHub reposuna bağlanacak.
- Build komutu ve yayın klasörü ayarlanacak.
- Canlı site linki README dosyasına eklenecek.

Netlify ayarları:

- Build command: `npm run build`
- Publish directory: `dist`

Terminal komutları:

```bash
git checkout main
git pull origin main
git checkout -b deploy/netlify-release
npm run build
```

GitHub ve Netlify sonrası README güncellendiyse:

```bash
git status
git add .
git commit -m "Canli proje linkini README dosyasina ekle"
git push -u origin deploy/netlify-release
git checkout main
git pull origin main
```

Kontrol:

- GitHub repo public olmalı.
- Netlify linki açılmalı.
- Canlı sitede CRUD işlemleri çalışmalı.
- README içinde GitHub ve canlı site bilgileri bulunmalı.

## Teslim Öncesi Son Kontrol

Teslimden önce aşağıdakiler kontrol edilecek:

- ReactJS kullanıldı.
- Proje Vite ile çalışıyor.
- `Components`, `Pages`, `Interfaces` klasörleri var.
- Pure CSS kullanıldı.
- Ekleme işlemi var.
- Listeleme işlemi var.
- Güncelleme işlemi var.
- Silme işlemi var.
- En az bir ekran görüntüsü var.
- GitHub reposu public.
- Netlify canlı linki çalışıyor.
- README dosyası anlaşılır.
- Proje sade, açıklanabilir ve eğitim seviyesine uygun.
