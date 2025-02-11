import { useCallback, useState } from "react";

export const useDrawer = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const openDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  return {
    isOpenDrawer,
    openDrawer,
    closeDrawer,
  };
};
