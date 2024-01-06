import LibPhoneNumber from "google-libphonenumber";

const PhoneNumberFormat = LibPhoneNumber.PhoneNumberFormat;
const PhoneNumberType = LibPhoneNumber.PhoneNumberType;
const PhoneNumberUtil = LibPhoneNumber.PhoneNumberUtil.getInstance();
const MIN_SIZE = 3;

// 驗證手機是否有效
export const isPhoneNumberValid = (phoneNumberStr, country) => {
  if (phoneNumberStr.length < MIN_SIZE) {
    return false;
  }
  try {
    const phoneObject = PhoneNumberUtil.parse(phoneNumberStr, country);

    const type = PhoneNumberUtil.getNumberType(phoneObject);

    return (
      type === PhoneNumberType.MOBILE ||
      type === PhoneNumberType.FIXED_LINE_OR_MOBILE
    );
  } catch (error) {
    console.log("error", error.message.replace("GraphQL error: ", ""));
  }
};

// 國際電話號碼的通用格式
export const formatE164 = (phoneNumber, country) =>
  PhoneNumberUtil.format(
    PhoneNumberUtil.parse(phoneNumber, country),
    PhoneNumberFormat.E164
  );

// 國際長途電話
export const formatInternational = (phoneNumber, country) =>
  PhoneNumberUtil.format(
    PhoneNumberUtil.parse(phoneNumber, country),
    PhoneNumberFormat.INTERNATIONAL
  );

// 國內格式
export const formatNational = (phoneNumber, country) =>
  PhoneNumberUtil.format(
    PhoneNumberUtil.parse(phoneNumber, country),
    PhoneNumberFormat.NATIONAL
  );

export const formatRFC3966 = (phoneNumber, country) =>
  PhoneNumberUtil.format(
    PhoneNumberUtil.parse(phoneNumber, country),
    PhoneNumberUtil.RFC3966
  );
