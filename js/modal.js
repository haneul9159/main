$(document).ready(function () {
    let isModalOpen = false; // 모달이 열렸는지 여부를 나타내는 변수

    // 모든 modal-open 클래스를 가진 요소에 대한 클릭 이벤트 처리
    const modalOpenButtons = document.querySelectorAll('.modal-open');
    modalOpenButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('href').substring(1);
            const modal = document.getElementById(modalId);

            // 풀페이지 스크롤을 잠금 상태로 변경
            $.fn.fullpage.setAllowScrolling(false);

            modal.style.display = 'block';
            isModalOpen = true; // 모달이 열린 상태로 플래그 업데이트
        });
    });

    // 모든 close-modal 클래스를 가진 요소에 대한 클릭 이벤트 처리
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.style.display = 'none';

            // 풀페이지 스크롤을 다시 활성화
            $.fn.fullpage.setAllowScrolling(true);

            isModalOpen = false; // 모달이 닫힌 상태로 플래그 업데이트
        });
    });

    // 모든 모달 외부 클릭 시 모달 닫기
    window.addEventListener('click', function (event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
            if (event.target == modal) {
                modal.style.display = 'none';

                // 풀페이지 스크롤을 다시 활성화
                $.fn.fullpage.setAllowScrolling(true);

                isModalOpen = false; // 모달이 닫힌 상태로 플래그 업데이트
            }
        });
    });
});
