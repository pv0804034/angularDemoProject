import { environment } from './../environments/environment';

export const ServerApis = {
  userLoginURL: `${environment.api}/login`,
  productsUrl: `${environment.api}/products`,
  vendorDataUrl: `${environment.api}/vendors`,
  districtsUrl: `${environment.api}/districts`,
  povinceUrl: `${environment.api}/provinces`,
  palikaUrl: `${environment.api}/palikas`,
  unitsUrl: `${environment.api}/units`,
  fiscalUrl: `${environment.api}/fiscalyears`,
  localSupplyUrl: `${environment.api}/supplies/local`,
  govtSupplyUrl: `${environment.api}/supplies/government`,
  privateSupplyUrl: `${environment.api}/supplies/private`,
  rolesUrl: `${environment.api}/roles`,
  usersUrl: `${environment.api}/users`,
  estimateUrl: `${environment.api}/estimates`,
  reportUrl: `${environment.api}/stats/monthly/`,
  reportDetailUrl: `${environment.api}/stats/monthly/details`,
  reportOfRateProductFiscalYearUrl: `${environment.api}/rates/product-fiscalyear`,
  yearlyDetailUrl: `${environment.api}/stats/yearly`,
  settingUrl: `${environment.api}/settings`,
  activeDistrictIdUrl: `${environment.api}/settings/active-district`,
  activeFiscalYearIdUrl: `${environment.api}/fiscalyears/active`,
  filterRateByDistrictUrl: `${environment.api}/rates/product-district-fiscalyear`,
  uploadBulkProducts: `${environment.api}/excel`,
  populationUrl: `${environment.api}/population`,
  distirctWiseData: `${environment.api}/stats/districts`,
};