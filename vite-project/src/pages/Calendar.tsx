import { Button } from "react-bootstrap";

export default function Calendar() {
  return (

    <div className="bg-[#1e1e1e] min-h-screen">
      <div className="flex items-center justify-between px-4 py-2 text-white">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <Button className="bg-red-600 text-xs">LIVE</Button>
            <span className="text-xs">실시간</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MicroscopeIcon className="text-white" />
          <BellIcon className="text-white" />
          <UserCircleIcon className="text-white" />
        </div>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div className="bg-[#333] p-4 rounded-md">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage alt="User live" src="/placeholder.svg?height=100&width=100" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-xs text-[#aaa] mb-1">Monday</div>
              <div className="text-sm text-white mb-1">99.9%가 구입 후 재구매 - 주문 즉시, 일일 배송 시작</div>
              <div className="text-xs text-[#aaa]">
                무료 배송 | 구매 후기 7만개 | 믿을 수 있는 100% 국내가공 | HSSP-9500R
              </div>
              <div className="flex items-center mt-2">
                <div className="text-xs text-[#e33] mr-2">46%</div>
                <div className="text-sm text-white">239,000원</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#333] p-4 rounded-md">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage alt="User live" src="/placeholder.svg?height=100&width=100" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-xs text-[#aaa] mb-1">Tuesday</div>
              <div className="text-sm text-white mb-1">자연에서 온 친환경 라텍스 베개 50% 할인 프로모션</div>
              <div className="text-xs text-[#aaa]">무료 배송 | 구매 후기 20만개 | 직접 체험한 제품 리뷰 | KDM 87N</div>
              <div className="flex items-center mt-2">
                <div className="text-xs text-[#e33] mr-2">29%</div>
                <div className="text-sm text-white">79,000원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}