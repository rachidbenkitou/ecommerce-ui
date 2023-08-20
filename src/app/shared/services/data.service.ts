import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public currentUser: any = {};
  public parametrageDto: any = {};
  public vCltClient: any = {};
  public prsTicket: any = {};
  public labelList: any = [];
  public vStrStructure: any = {};
  public structure: any = undefined;
  public statistics: any = {};
  public rapportOptions: any={};
  public userDataPicture : any
  public tntModuleCurrentUser : any
  public subscriptionPeriod :  any = [];
  public tntPackage :  any = [];
  public structureDataPicture : any
  public refCountry :  any = [];
  public refCityMarrocco :  any = [];
  public usrUserCategory : any = [];
  public usrUserStatus : any = [];
  public refCivility : any = [];

  public countriesList: any = undefined;
  public morroccanCitiesList: any = undefined;
  public morroccanRegionsList: any = undefined;
  public legalFormsList: any = undefined;
  public structureStatusList: any = undefined;
  /*
  public storeList: any = undefined;
  public countriesList: any = undefined;
  public legalFormsList: any = undefined;
  public strMembersList: any = undefined;
  public currentModulesList: any = undefined;
  public districtsList: any = undefined;
  public morroccanCitiesList: any = undefined;
  public morroccanRegionsList: any = undefined;
  */
  public menuList : any
  public tableLimit : number = 10

  getRefCountry() {
    return this.refCountry;
  }

  setRefCountry(refCountry : any) {
    this.refCountry = refCountry;
  }

  getMenuList() {
    return this.menuList;
  }

  setMenuList(menuList : any) {
    this.menuList = menuList;
  }

  getUserDataPicture() {
    return this.userDataPicture.content;
  }

  setUserDataPicture(Picture : any) {
    this.userDataPicture = Picture;
  }

  getStructureDataPicture() {
    return this.structureDataPicture.content;
  }

  setStructureDataPicture(Picture : any) {
    this.structureDataPicture = Picture;
  }

  getModuleId() {
    return this.currentUser.cltModuleId;
  }

  getTenantId() {
    return this.currentUser.tenantId;
  }

  getStructureId() {
    return this.currentUser.structureId;
  }


  getVStrStructure() {
    return this.vStrStructure;
  }


  getUser() {
    return this.currentUser;
  }

  getVCltClient() {
    return this.vCltClient;
  }

  getPrsTicket() {
    return this.prsTicket;
  }

  getLabelList() {
    return this.labelList;
  }
  getStructureName() {
    return this.currentUser.structureName;
  }
  getStatistics(){
    return this.statistics;
  }
  getRapportOptions(){
    return this.rapportOptions;
  }


  // getter and setter for the current structure

  getStructure(){
    return this.structure;
  }

  setStructure(structure: any){
    this.structure = structure;
  }

  getCountriesList(){
    return this.countriesList;
  }

  setCountriesList(countriesList: any){
    this.countriesList = countriesList;
  }

  getLegalFormsList(){
    return this.legalFormsList;
  }

  setLegalFormsList(legalFormsList: any){
    this.legalFormsList = legalFormsList;
  }

  // getter and setter for the store list of the current structure
/*
  getStoreList(){
    return this.storeList;
  }

  setStoreList(storeList: any){
    this.storeList = storeList;
  }

  // getter and setter for the country list

  getCountriesList(){
    return this.countriesList;
  }

  setCountriesList(countriesList: any){
    this.countriesList = countriesList;
  }

  // getter and setter for the legal forms list

  getLegalFormsList(){
    return this.legalFormsList;
  }

  setLegalFormsList(legalFormsList: any){
    this.legalFormsList = legalFormsList;
  }

  // getter and setter for the members of the current structure

  getStrMembersList(){
    return this.strMembersList;
  }

  setStrMembersList(strMembersList: any){
    this.strMembersList = strMembersList;
  }

  // getter and setter for the modules of the current structure

  getCurrentModulesList(){
    return this.currentModulesList;
  }

  setCurrentModulesList(currentModulesList: any){
    this.currentModulesList = currentModulesList;
  }

  // getter and setter for the districts

  getDistrictsList(){
    return this.districtsList;
  }

  setDistrictsList(districtsList: any){
    this.districtsList = districtsList;
  }

  // getter and setter for the morroccan cities

  getMorroccanCitiesList(){
    return this.morroccanCitiesList;
  }

  setMorroccanCitiesList(morroccanCitiesList: any){
    this.morroccanCitiesList = morroccanCitiesList;
  }

  // getter and setter for the morroccan regions

  getMorroccanRegionsList(){
    return this.morroccanRegionsList;
  }

  setMorroccanRegionsList(morroccanRegionsList: any){
    this.morroccanRegionsList = morroccanRegionsList;
  }
  */

}
