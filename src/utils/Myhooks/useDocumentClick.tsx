import {useEffect} from 'react'
//��Ϊ��������Ϊ[]����ֻ����ʻһ��
const useDocumentClick = () => {
  useEffect(() => {
    // //����function��ԭ���ǣ����û��function�������ǾͲ�֪������Ƴ�����Ϊ�������ģ�
    const resizeEvent = () => {
      console.log("Window change size!");
    };
    window.addEventListener("resize", resizeEvent);
    //���������ʱ���Ƴ�����
    return () => {
      console.log("Component unmount!");
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);
}

export default useDocumentClick