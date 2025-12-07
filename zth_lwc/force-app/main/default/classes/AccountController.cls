public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return[SELECT Id, Name, AnnualRevenue, Rating, Type from Account LIMIT 5];

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByType(String type){
        return[SELECT Id, Name, AnnualRevenue, Rating, Type from Account WHERE Type=:type LIMIT 5];

    }
}