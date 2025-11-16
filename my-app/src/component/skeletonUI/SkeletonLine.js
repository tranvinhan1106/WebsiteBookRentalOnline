import React, { useEffect } from "react";

const SkeletonKeyframes = `
    @keyframes shimmer {
        0% { background-position: -450px 0;}
        100% { background-position: 450px 0;}
    }  
`;

const SkeletonLine = ({width = '100%', height ='20px'}) => {
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText =SkeletonKeyframes;
        document.head.appendChild(styleSheet);

        return () => {
            if(document.head.contains(styleSheet)){
                document.head.removeChild(styleSheet);
            }
        }
    },[])

    const style = {
        width: width,
        height: height,
        backgroundColor: '#e0e0e0', 
        backgroundImage: 'linear-gradient(to right, #e0e0e0 0%, #f5f5f5 20%, #e0e0e0 40%, #e0e0e0 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '800px 104px',
        animation: 'shimmer 1.2s linear infinite',
        borderRadius: '4px',
        margin: '4px 0', 
    };

    return <div style={style}></div>;
}
export default SkeletonLine;