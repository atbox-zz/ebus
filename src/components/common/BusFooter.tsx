import { useTranslation } from 'react-i18next';

function BusFooter() {
  const { t } = useTranslation();

  return (
    <footer className="w-full h-14 fixed left-0 bottom-0 text-white text-center leading-[56px] bg-gray-700">
      {/*Copyright © 2023 {t('website_name')} All rights reserved.*/}
      {/*Copyright © 2021 AmTRAN Technology Co Ltd., All Rights Reserved.*/}
      Copyright © 2024 {t('designer')} All Rights Reserved.
    </footer>
  )
}

export default BusFooter;
