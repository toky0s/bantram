import { useState } from "react";

const data = [
  "Bột & Dăm Trầm Hương",
  "Dây chuyền Trầm Hương",
  "Kì nam",
  "Lư xông đốt trầm hương",
  "Nhang Trầm Hương",
  "Phụ kiện trầm hương",
  "Thác khói trầm hương",
  "Tinh Dầu Trầm Hương",
  "Trà Trầm Hương",
  "Trầm cảnh",
  "Trầm cảnh ô tô",
  "Trầm miếng",
  "Vòng tay Trầm Hương",
]

export default function ProductCateSideBar() {

  const [categories, setCategories] = useState(data);
  return <>
    <aside className="text-left font-sans px-2">
      <div className="text-xl uppercase">
        <span className="font-medium">Danh mục sản phẩm</span>
      </div>
      <div className="h-1 w-20 bg-slate-200 mx-auto my-3"></div>
      <ul className="list-none">
        {
          categories.map((category, idx) =>
            <li key={idx} className=" text-slate-500 cursor-pointer py-2 text-left border-b-2 border-gray-400
            hover:text-slate-800">
              <a>{category}</a>
            </li>
          )
        }
      </ul>
    </aside>
  </>
}