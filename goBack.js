/* useNavigate를 이용해서 뒤로가기 버튼 만들기*/

/**
 * 1. react-router-dom 설치가 선행되어야 한다.
 * import {  useNavigate } from "react-router-dom";
 *
 * 2. 변수 선언
 * let navigate = useNavigate();
 * const goBack = () => {
 *   navigate(-1);
 * };
 *
 * 3. 버튼 만들기
 * <div>
 *  <button onClick={goBack}>뒤로가기</button>
 * </div>
 */
