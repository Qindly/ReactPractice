import {useEffect} from 'react'
//因为所依赖处为[]所以只会行驶一次
const useDocumentClick = () => {
  useEffect(() => {
    // //建立function的原因是，如果没有function名，我们就不知道如何移除（因为是匿名的）
    const resizeEvent = () => {
      console.log("Window change size!");
    };
    window.addEventListener("resize", resizeEvent);
    //当组件销毁时，移除监听
    return () => {
      console.log("Component unmount!");
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);
}

export default useDocumentClick