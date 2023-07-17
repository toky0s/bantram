export default function ProductSmall() {
  return <>
    <div className="text-center w-32">
      <div className="">
        <a href="">
          <img className="m-auto block h-32 w-32" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80" alt="" />
        </a>
      </div>
      <div className="whitespace-break-spaces">
        <a href="" className="text-sm text-gray-400">Nhang Trầm Hương Nụ - Loại 1</a>
      </div>
      <div>
        <span className="font-bold">VND 800,000 - VND 4,000,000</span>
      </div>
      <div className="cursor-pointer">
        <a className="relative before:absolute before:h-1 before:bg-gray-400 before:opacity-1 uppercase font-bold text-xs text-gray-400" >Thêm vào giỏ</a>
      </div>
    </div>
  </>
}