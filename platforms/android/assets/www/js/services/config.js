var app = angular.module('starter.configs', []);

// app.config(RouteProvider);
app.constant("CONFIG", {
  "FIREBASE_API": 'AIzaSyDTweTvv0nUvVsJl8NJn_3NgGHBanIT8mg',
  "FIREBASE_AUTH_DOMAIN": 'carpool-d5ad9.firebaseapp.com',
  "FIREBASE_DB_URL": 'https://carpool-d5ad9.firebaseio.com',
  "FIREBASE_STORAGE": 'carpool-d5ad9.appspot.com',
  "MESSAGE_SENDER_ID": '133163116401'
});


app.constant("REFERENCE", {
  "ALASAN_BATAL": 'alasan_batal',
  "BANK_AKUN": 'BANK_AKUN',
  "BANK_NAMA": 'BANK_NAMA',
  "BOOKING": 'BOOKING',
  "BOOKING_SEEKER_MEMBER": 'booking_seeker_member',
  "KENDARAAN": 'kendaraan',
  "KENDARAAN_JENIS": 'kendaraan_jenis',
  "KENDARAAN_MERK": 'kendaraan_merk',
  "KENDARAAN_MODEL": 'kendaraan_model',
  "KENDARAAN_TIPE": 'kendaraan_tipe',
  "M_HARI": 'm_hari',
  "M_KECAMATAN": 'm_kecamatan',
  "M_KODE_POS": 'm_kode_pos',
  "M_KOTA": 'm_kota',
  "M_NEGARA": 'm_negara',
  "M_PREFERENSI": 'M_PREFERENSI',
  "M_PROVINSI": 'M_PROVINSI',
  "MESSAGE": 'message',
  "OFFER": 'offer',
  "OFTEN_OFFER": 'often_offer',
  "OFTEN_OFFER_HARI_OUTBOUND": 'often_offer_hari_outbound',
  "OFTER_OFFER_HARI_RETURN": 'ofter_offer_hari_return',
  "PAGE": 'page',
  "PAGE_CAT": 'page_cat',
  "POSIBLE_DETOUR": 'posible_detour',
  "STOPOVERS": 'stopovers',
  "UKURAN_BARANG_BAWAAN": 'ukuran_barang_bawaan',
  "USER": 'user',
  "USER_BANK_AKUN": 'user_bank_akun',
  "USER_KENDARAAN": 'user_kendaraan',
  "USER_PREFERENSI": 'user_preferensi'
});