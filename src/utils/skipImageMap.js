const skipImages = import.meta.glob('../assets/skips/*.jpg', { eager: true });

export const getSkipImage = (size) => {
  const normalizedSize = String(size).trim();
  
  const entry = Object.entries(skipImages).find(([path]) =>
    path.toLowerCase().includes(`/${normalizedSize}-yarder-skip.jpg`)
  );

  return entry?.[1]?.default || null;
};