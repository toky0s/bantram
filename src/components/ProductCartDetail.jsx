import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/**
 * Render chi tiết sản phẩm trong trang Product.
 * 
 * @param {*} param0 
 * @param param0.category Loại sản phẩm
 * @param param0.description Mô tả
 * @param param0.price Giá VND
 * @param param0.productCode Mã sản phẩm
 * @param param0.productName Tên sản phẩm
 * @param param0.quantity Số lượng còn trong kho
 * @param param0.tags Danh sách thẻ
 * @returns 
 * 
 * @author Truong A Xin
 */
export default function ProductCartDetail({
  category,
  description,
  price,
  productCode,
  productName,
  quantity,
  tags
}) {

  const [productQuantity, setProductQuantity] = useState(quantity);

  const handleProductQtyChange = (e) => {
    setProductQuantity(e.target.value)
  }

  const handleIncrementClick = () => {
    setProductQuantity(prev => prev + 1)
  }

  const handleDecrementClick = () => {
    if (productQuantity > 1) {
      setProductQuantity(prev => prev - 1)
    }
  }

  /**
   * Reset qty về lại mặc định nếu người dùng không nhập gì
   * và để giá trị rỗng.
   */
  const handleQtyBlur = () => {
    if (productQuantity == null || productQuantity == '') {
      setProductQuantity(quantity);
    }
  }

  return <>
    <div className="pl-2 text-left">
      <nav className="cursor-pointer text-slate-500 hover:text-slate-900">
        <a className="uppercase text-xs">{category}</a>
      </nav>
      <h1 className="font-bold text-2xl">{productName}</h1>
      <div className="h-1 w-20 bg-slate-200 my-3"></div>
      <div className="mb-2">
        <bdi><span className="font-bold text-xl">VND</span> <span className="font-bold text-3xl">{price}</span></bdi>
      </div>
      <div className="mb-5">
        <p className="text-sm">
          {description}
        </p>
      </div>
      <form
        className="flex flex-row gap-1 flex-wrap mb-8">
        <div className="inline-flex">
          <button
            onClick={handleDecrementClick}
            name="decrement"
            type="button"
            className="h-10 border-solid px-2 border-2 hover:bg-slate-200 duration-300 transition-all">-</button>
          <input
            onBlur={handleQtyBlur}
            type="number"
            className="[-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none h-10 text-center border-solid border-y-2 w-10 focus:outline-none "
            name="quantity"
            value={productQuantity}
            onChange={handleProductQtyChange}
            aria-label="Product quantity"
            inputMode="numeric"
            autoComplete="off" />
          <button
            onClick={handleIncrementClick}
            type="button"
            name="increment"
            className="h-10 border-solid px-2 border-2 hover:bg-slate-200 duration-300 transition-all">+</button>
        </div>
        <button
          type="button"
          name="add-to-cart"
          className="uppercase px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm">Thêm vào giỏ</button>
      </form>

      <div className="text-xs text-slate-500 mb-4">
        <ul>
          <li className="border-t-2 py-2"><span className="">Mã: <span className="sku">{productCode}</span></span></li>
          <li className="border-t-2 py-2"><span className="">Danh mục: <a rel="tag">Dây chuyền Trầm Hương</a></span></li>
          <li className="border-t-2 py-2"><span>Tag: </span>
            {tags.map((tag, idx) =>
              <a key={idx}>{tag}{idx == tags.length - 1 ? '. ' : ', '}</a>
            )}
          </li>
        </ul>
      </div>

      <div className="flex flex-row flex-wrap gap-1">
        <a
          className="text-gray-300 text-xl text-center w-10 h-10 inline-block rounded-full border-solid border-gray-300 border-2 hover:border-gray-500 hover:text-gray-500 transition-all duration-300"
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp">
          <FontAwesomeIcon icon={faEnvelope} className=" align-middle" />
        </a>
        <a
          className="text-gray-300 text-xl text-center w-10 h-10 inline-block rounded-full border-solid border-gray-300 border-2 hover:border-gray-500 hover:text-gray-500 transition-all duration-300"
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp">
          <FontAwesomeIcon icon={faEnvelope} className=" align-middle" />
        </a>
        <a
          className="text-gray-300 text-xl text-center w-10 h-10 inline-block rounded-full border-solid border-gray-300 border-2 hover:border-gray-500 hover:text-gray-500 transition-all duration-300"
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp">
          <FontAwesomeIcon icon={faEnvelope} className=" align-middle" />
        </a>
        <a
          className="text-gray-300 text-xl text-center w-10 h-10 inline-block rounded-full border-solid border-gray-300 border-2 hover:border-gray-500 hover:text-gray-500 transition-all duration-300"
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp">
          <FontAwesomeIcon icon={faEnvelope} className=" align-middle" />
        </a>
      </div>
    </div>
  </>
}