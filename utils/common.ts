export function getYesterdayDate() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  const day = String(yesterday.getDate()).padStart(2, '0');

  return `${year}${month}${day}`;
}

export function ScrollDownPhoneBox(height: number) {
  const scrollTarget = document.querySelector('#phoneBox');
  if (!scrollTarget) return;
  console.log('skp height', height);

  if (scrollTarget.scrollHeight > height) return;
  scrollTarget.scrollTo({ behavior: 'smooth', top: height });
}
