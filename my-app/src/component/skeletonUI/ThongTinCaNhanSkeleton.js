import React from "react";
import '../thongtincanhan/Thongtincanhan.css';
import SkeletonLine from "../skeletonUI/SkeletonLine";

export function ThongTinCaNhanSkeleton() {
    return(
      <div className="color-body main-content">
            <div className="title">
                <SkeletonLine width="250px" height="36px" />
                <hr />
            </div>
            
            <div className="containerSecond">
                <div className="vertical">
                    <SkeletonLine width="80%" height="40px" />
                    <SkeletonLine width="80%" height="40px" />
                </div>
                
                <div className="form-edit">
                    <div className="horizontalttcn">
                        
                        <div className="horizontal-left">
                            <SkeletonLine width="90%" height="20px" />
                            <SkeletonLine width="70%" height="20px" />
                            <SkeletonLine width="80%" height="20px" />
                            <SkeletonLine width="60%" height="20px" />
                        </div>
                        <div className="horizontal-right">
                            <SkeletonLine width="100%" height="20px" />
                            <SkeletonLine width="50%" height="20px" />
                            <SkeletonLine width="80%" height="20px" />
                        </div>
                    </div>
                    <div className="edit">
                        <SkeletonLine width="100px" height="36px" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ThongTinCaNhanSkeleton;