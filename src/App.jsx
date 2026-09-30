import { useMemo, useState } from "react";
import "./App.css";

const categories = [
["💻","Computers & IT","Laptops, desktops, networking & accessories"],
["📱","Phones & Electronics","Phones, tablets, gadgets & electronics"],
["🖨️","Printing & Design","Printing, branding, design & signage"],
["👕","Clothing & Fashion","Clothes, uniforms, shoes & custom wear"],
["🏠","Home & Furniture","Furniture, appliances & household goods"],
["🔨","Hardware & Construction","Building materials, tools & equipment"],
["🌾","Agriculture","Farm supplies, equipment & services"],
["🚗","Vehicles & Parts","Cars, spares, tyres & vehicle services"],
["🍽️","Food & Catering","Food suppliers, restaurants & catering"],
["💼","Professional Services","Business and professional services"],
["🎓","Education & Training","Schools, tutors, training & courses"],
["⚡","Other Products & Services","Discover more businesses"]
];
const products=[
["💻","Laptop Computers","TechWorld Supplies","Computers & IT","From $250"],
["👕","DTF T-Shirt Printing","Thostra Printing","Printing & Design","From $5"],
["🔨","Building Materials","BuildPro Hardware","Hardware & Construction","Request quote"],
["🌾","Farming Equipment","AgriDirect","Agriculture","Request quote"],
["📱","Mobile Phones","TechWorld Supplies","Phones & Electronics","From $80"],
["🎨","Graphic Design Services","Thostra Printing","Printing & Design","Request quote"]
];
const vendors=[
["T","Thostra Printing","Printing & Design","Bulawayo"],
["T","TechWorld Supplies","Computers & IT","Bulawayo"],
["B","BuildPro Hardware","Hardware & Construction","Harare"],
["A","AgriDirect","Agriculture","Zimbabwe"]
];

export default function App(){
const [search,setSearch]=useState(""); const [category,setCategory]=useState("All"); const [vendorForm,setVendorForm]=useState(false);
const filtered=useMemo(()=>{const q=search.toLowerCase();return products.filter(p=>(!q||p.join(" ").toLowerCase().includes(q))&&(category==="All"||p[3]===category));},[search,category]);
const productsEl=()=>document.getElementById("products")?.scrollIntoView({behavior:"smooth"});
return <div className="site">
<header className="header"><div className="container nav"><a className="logo" href="#top"><span className="logo-mark">T</span>THOSTRA</a><nav><a href="#categories">Categories</a><a href="#products">Products</a><a href="#vendors">Vendors</a><button onClick={()=>setVendorForm(true)}>List Your Business</button></nav></div></header>
<section className="hero" id="top"><div className="container hero-grid"><div><div className="eyebrow">THE ONE STOP MARKETPLACE FOR EVERYONE</div><h1>Find it. Compare it. Connect with the seller.</h1><p>Discover products, services, suppliers and manufacturers from businesses in Zimbabwe — all in one marketplace.</p><div className="search"><span>⌕</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="What are you looking for?"/><button onClick={productsEl}>Search</button></div><div className="popular"><span>Popular:</span>{categories.slice(0,4).map(c=><button key={c[1]} onClick={()=>{setCategory(c[1]);productsEl()}}>{c[1]}</button>)}</div></div><div className="hero-panel"><small>THOSTRA MARKETPLACE</small><div className="panel-icons"><span>💻</span><span>📱</span><span>👕</span><span>🏠</span></div><h3>Many businesses. One place.</h3><p>Manufacturers • Suppliers • Retailers • Service Providers</p></div></div></section>
<section className="trust"><div className="container trust-grid"><div><b>Products</b><span>Discover what businesses offer</span></div><div><b>Services</b><span>Find professionals near you</span></div><div><b>Suppliers</b><span>Connect directly with suppliers</span></div><div><b>Vendors</b><span>Promote your business</span></div></div></section>
<section className="section" id="categories"><div className="container"><div className="heading"><div><div className="eyebrow">EXPLORE</div><h2>Shop by category</h2></div></div><div className="category-grid">{categories.map(c=><button className="category-card" key={c[1]} onClick={()=>{setCategory(c[1]);productsEl()}}><span className="cat-icon">{c[0]}</span><div><h3>{c[1]}</h3><p>{c[2]}</p></div><span className="arrow">›</span></button>)}</div></div></section>
<section className="section light" id="products"><div className="container"><div className="heading"><div><div className="eyebrow">DISCOVER</div><h2>Featured products & services</h2></div><select value={category} onChange={e=>setCategory(e.target.value)}><option>All</option>{categories.map(c=><option key={c[1]}>{c[1]}</option>)}</select></div><div className="product-grid">{filtered.map(p=><article className="product-card" key={p[1]}><div className="product-picture">{p[0]}</div><div className="product-content"><span className="tag">{p[3]}</span><h3>{p[1]}</h3><p>{p[2]}</p><div className="product-bottom"><strong>{p[4]}</strong><button onClick={()=>alert("Enquiry for "+p[1]+" — "+p[2])}>Enquire</button></div></div></article>)}</div>{!filtered.length&&<div className="empty">No matching listings found.</div>}</div></section>
<section className="section" id="vendors"><div className="container"><div className="heading"><div><div className="eyebrow">BUSINESS DIRECTORY</div><h2>Featured vendors</h2></div><button className="outline" onClick={()=>setVendorForm(true)}>Become a vendor</button></div><div className="vendor-grid">{vendors.map(v=><div className="vendor-card" key={v[1]}><div className="vendor-logo">{v[0]}</div><div><h3>{v[1]}</h3><p>{v[2]}</p><small>📍 {v[3]}</small></div><span className="arrow">›</span></div>)}</div></div></section>
<section className="container section"><div className="business-cta"><div><div className="eyebrow yellow">FOR VENDORS, SUPPLIERS & MANUFACTURERS</div><h2>Grow your business with Thostra.</h2><p>List your products and services and connect with customers looking for what you sell.</p></div><button onClick={()=>setVendorForm(true)}>List Your Business</button></div></section>
<footer><div className="container footer-inner"><div><strong>THOSTRA</strong><p>The one stop marketplace for everyone.</p></div><div><a href="#categories">Categories</a><a href="#products">Products</a><a href="#vendors">Vendors</a></div><div><b>Marketplace</b><p>Zimbabwe • Africa • Online</p></div></div><div className="copyright">© {new Date().getFullYear()} Thostra. All rights reserved.</div></footer>
{vendorForm&&<div className="modal-bg" onClick={()=>setVendorForm(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setVendorForm(false)}>×</button><div className="eyebrow">JOIN THOSTRA</div><h2>List your business</h2><p>Enter your business details. We will connect this to a real vendor database in the next stage.</p><input placeholder="Business name"/><input placeholder="Phone / WhatsApp"/><input placeholder="Email address"/><input placeholder="Business category"/><textarea placeholder="What do you sell or provide?"></textarea><button className="submit" onClick={()=>{alert("Thank you! Your vendor application has been received.");setVendorForm(false)}}>Submit application</button></div></div>}
</div>}
