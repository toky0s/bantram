import ProductCateSideBar from '../components/ProductCateSideBar'
import ProductCartDetail from '../components/ProductCartDetail'

const tags = [
  "dây chuyền trầm hương",
  "Dây chuyền trầm hương rừng Việt Nam",
  "Dây chuyền trầm hương thiên nhiên",
  "trầm hương",
]

/**
 * 
 * @author Truong A Xin
 */
export default function Products() {
  return <>
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <ProductCateSideBar></ProductCateSideBar>
        </div>
        <div className="col-span-6">
          <div className='image-container'>
            <div className="main-image">
              <img src="https://images.unsplash.com/photo-1636978669347-ebc543a814f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
            </div>
          </div>
        </div>
        {/* Thông tin chi tiết sản phẩm */}
        <div className="col-span-3">
          <ProductCartDetail
            category="Dây chuyền Trầm Hương"
            description="Dây chuyền trầm hương rừng Việt Nam được thiết kế theo phong cách đơn giản, tao nhã nhưng vẫn tôn lên sự sang trọng, quý phái . Dây chuyền trầm hương thiên nhiên dạng đốt, mùi trầm ngọt ngào dịu nhẹ, luôn là sự lựa chọn hàng đầu của các tín đồ phong thủy và các doanh nhân, là một món quà tặng quý giá, ý nghĩa, mang lại may mắn và bình an cho người thân/gia đình."
            tags={tags}
            price={30000}
            productCode="THVN_DaychuyentramhuongRungVietNam"
            productName="Dây chuyền trầm hương rừng Việt Nam"
            quantity={1}></ProductCartDetail>
        </div>
      </div>
    </div>
  </>
}
