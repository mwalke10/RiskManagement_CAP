export default function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/service1.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/RisksMobile/Actions/Mitigations/NavToMitigations_CreateRisks.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/Mitigations/NavToMitigations_CreateRisks.action');
    }
}