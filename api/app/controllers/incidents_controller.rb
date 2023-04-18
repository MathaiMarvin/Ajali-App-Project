class IncidentsController < ApplicationController

    def create
    incident = Incident.create(incident_params)
        if incident.valid?
            app_response(status: :created, data: incident)
        else
            app_response(status: :unprocessable_entity, data: incident.errors, message: 'failed')
        end
    end
    def destroy
        Incident.find(params[:id]).destroy
    end
        def todo_params
            params.permit(:title, :description, :status, :geolocations, :videos, :images)
        end
    
    end
end
