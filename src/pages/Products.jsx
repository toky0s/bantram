import ProductCateSideBar from '../components/ProductCateSideBar'
import ProductCartDetail from '../components/ProductCartDetail'
import ProductSmall from '../components/ProductSmall'

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
    <div className="mb-20">
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
    <div className='border-t-2 mb-20'>
      {/* Description */}
      <div>
        <ul className='flex flex-row gap-2 uppercase font-bold'>
          {/* Chuyển Opacity về 0 để focus */}
          <li className='relative text-gray-900'><a className="cursor-pointer py-2 inline-flex before:top-0 before:absolute before:w-full before:h-1 before:content-[' '] before:opacity-1 before:bg-gray-500">Mô tả</a></li>
          <li className='relative text-gray-500'><a className="cursor-pointer py-2 inline-flex before:top-0 before:absolute before:w-full before:h-1 before:content-[' '] before:opacity-0 before:bg-gray-500">Thông tin bổ xung</a></li>
          <li className='relative text-gray-500'><a className="cursor-pointer py-2 inline-flex before:top-0 before:absolute before:w-full before:h-1 before:content-[' '] before:opacity-0 before:bg-gray-500">Đánh giá</a></li>
        </ul>
        <div>
          <p>
            Nhang Trầm Hương không tăm có quá trình sản xuất tương tự nhang Trầm Hương có tăm. Tuy nhiên, thay vì được định hình bằng lõi tăm tre thì loại nhang trầm này không sử dụng tăm tre, thành phần 100% tự nhiên chỉ gồm bột trầm và keo kết dính từ cây bời lời . Vì vậy, nhang Trầm Hương không tăm có chất lượng cao hơn những loại khác do không bị lẫn mùi tăm tre và nước ngâm cánh sen.
            Trầm Hương không tăm thường được sử dụng nhiều trong những buổi lễ cầu nguyện, yoga, thiền định hoặc trà đạo. Mùi thơm có vị ngọt, thoang thoảng chút thanh mát của nhang Trầm Hương không tăm sẽ giúp giải tỏa stress, tinh thần thư thái,, và lưu thông năng lượng một cách hiệu quả, do đó nhang không tăm cực kỳ phù hợp với những ai có thói quen tập yoga, ngồi thiền.
            Để sử dụng nhang Trầm Hương không tăm, bạn cần phải có thêm đế cắm nhang hoặc khay đốt trầm chuyên dụng. Khi dùng, bạn cắm một đầu nhang vào chân đế rồi đốt đầu ở trên, , phần đế ngoài nhiệm vụ giữ nhang đứng thẳng còn giúp cho tàn nhang không bị rớt ra ngoài, đốt nhang xong sẽ rất dễ vệ sinh do tàn hương không bị rơi vãi lung tung.
          </p>
        </div>
      </div>
    </div>
    <div className='border-t-2'>
      {/* Description */}
      <div className='py-3'> 
        <h3 className='font-bold text-2xl'>Sản phẩm tương tự</h3>
        <div className='mb-10'>
          <p>
            Nhang Trầm Hương không tăm có quá trình sản xuất tương tự nhang Trầm Hương có tăm. Tuy nhiên, thay vì được định hình bằng lõi tăm tre thì loại nhang trầm này không sử dụng tăm tre, thành phần 100% tự nhiên chỉ gồm bột trầm và keo kết dính từ cây bời lời . Vì vậy, nhang Trầm Hương không tăm có chất lượng cao hơn những loại khác do không bị lẫn mùi tăm tre và nước ngâm cánh sen.
            Trầm Hương không tăm thường được sử dụng nhiều trong những buổi lễ cầu nguyện, yoga, thiền định hoặc trà đạo. Mùi thơm có vị ngọt, thoang thoảng chút thanh mát của nhang Trầm Hương không tăm sẽ giúp giải tỏa stress, tinh thần thư thái,, và lưu thông năng lượng một cách hiệu quả, do đó nhang không tăm cực kỳ phù hợp với những ai có thói quen tập yoga, ngồi thiền.
            Để sử dụng nhang Trầm Hương không tăm, bạn cần phải có thêm đế cắm nhang hoặc khay đốt trầm chuyên dụng. Khi dùng, bạn cắm một đầu nhang vào chân đế rồi đốt đầu ở trên, , phần đế ngoài nhiệm vụ giữ nhang đứng thẳng còn giúp cho tàn nhang không bị rớt ra ngoài, đốt nhang xong sẽ rất dễ vệ sinh do tàn hương không bị rơi vãi lung tung.
          </p>
        </div>
        <div className='flex flex-row gap-3'>
          <ProductSmall></ProductSmall>
          <ProductSmall></ProductSmall>
          <ProductSmall></ProductSmall>
          <ProductSmall></ProductSmall>
          <ProductSmall></ProductSmall>
          <ProductSmall></ProductSmall>
          <ProductSmall></ProductSmall>
        </div>
      </div>
    </div>
  </>
}
